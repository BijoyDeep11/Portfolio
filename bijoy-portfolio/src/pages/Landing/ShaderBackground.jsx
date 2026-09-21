import { useEffect, useRef } from "react";

const vertexShaderSource = `
  attribute vec2 a_position;

  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

const fragmentShaderSource = `
  precision highp float;

  uniform vec2 iResolution;
  uniform float iTime;

  #define PI 3.14159265359

  /*
   * Simple procedural particle field.
   *
   * This is intentionally a first-step shader.
   * We are getting the WebGL pipeline working first.
   */

  float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);

    return fract(p.x * p.y);
  }

  float particle(vec2 uv, vec2 cell) {
    vec2 randomPoint = vec2(
      hash(cell),
      hash(cell + 17.31)
    );

    vec2 point = cell + randomPoint;

    float distanceToPoint = length(uv - point);

    return smoothstep(
      0.025,
      0.0,
      distanceToPoint
    );
  }

  void main() {

    /*
     * Normalize coordinates while preserving
     * the screen's aspect ratio.
     */

    vec2 uv = gl_FragCoord.xy / iResolution.xy;

    uv.x *= iResolution.x / iResolution.y;


    /*
     * Slow movement through the particle field.
     */

    uv += vec2(
      iTime * 0.015,
      -iTime * 0.01
    );


    /*
     * Scale the field.
     */

    vec2 gridUV = uv * 8.0;

    vec2 cell = floor(gridUV);


    /*
     * Check surrounding cells.
     */

    float particles = 0.0;

    for (int x = -1; x <= 1; x++) {

      for (int y = -1; y <= 1; y++) {

        vec2 offset = vec2(
          float(x),
          float(y)
        );

        particles += particle(
          gridUV,
          cell + offset
        );
      }
    }


    /*
     * Very subtle cobalt atmosphere.
     */

    vec3 background = vec3(
      0.008,
      0.009,
      0.012
    );

    vec3 blue = vec3(
      0.03,
      0.25,
      0.95
    );


    /*
     * Keep the particles deliberately subtle.
     */

    float glow = particles * 0.65;

    vec3 color =
      background +
      blue * glow;


    /*
     * Very subtle vignette.
     */

    vec2 centeredUV =
      gl_FragCoord.xy / iResolution.xy;

    float vignette =
      1.0 -
      smoothstep(
        0.25,
        0.85,
        distance(
          centeredUV,
          vec2(0.5)
        )
      );

    color *= mix(
      0.55,
      1.0,
      vignette
    );


    gl_FragColor =
      vec4(color, 1.0);
  }
`;

function ShaderBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const gl =
      canvas.getContext("webgl", {
        alpha: false,
        antialias: false,
        powerPreference: "high-performance",
      });

    if (!gl) {
      console.warn(
        "WebGL is not supported by this browser."
      );

      return;
    }

    /* =========================================
       CREATE SHADER
       ========================================= */

    const createShader = (type, source) => {
      const shader = gl.createShader(type);

      gl.shaderSource(
        shader,
        source
      );

      gl.compileShader(shader);

      if (
        !gl.getShaderParameter(
          shader,
          gl.COMPILE_STATUS
        )
      ) {
        console.error(
          gl.getShaderInfoLog(shader)
        );

        gl.deleteShader(shader);

        return null;
      }

      return shader;
    };


    /* =========================================
       CREATE PROGRAM
       ========================================= */

    const vertexShader =
      createShader(
        gl.VERTEX_SHADER,
        vertexShaderSource
      );

    const fragmentShader =
      createShader(
        gl.FRAGMENT_SHADER,
        fragmentShaderSource
      );

    if (!vertexShader || !fragmentShader) {
      return;
    }

    const program =
      gl.createProgram();

    gl.attachShader(
      program,
      vertexShader
    );

    gl.attachShader(
      program,
      fragmentShader
    );

    gl.linkProgram(program);

    if (
      !gl.getProgramParameter(
        program,
        gl.LINK_STATUS
      )
    ) {
      console.error(
        gl.getProgramInfoLog(program)
      );

      return;
    }


    /* =========================================
       FULL SCREEN QUAD
       ========================================= */

    const positionBuffer =
      gl.createBuffer();

    gl.bindBuffer(
      gl.ARRAY_BUFFER,
      positionBuffer
    );

    const positions = new Float32Array([
      -1, -1,
       1, -1,
      -1,  1,

      -1,  1,
       1, -1,
       1,  1,
    ]);

    gl.bufferData(
      gl.ARRAY_BUFFER,
      positions,
      gl.STATIC_DRAW
    );


    /* =========================================
       LOCATIONS
       ========================================= */

    const positionLocation =
      gl.getAttribLocation(
        program,
        "a_position"
      );

    const resolutionLocation =
      gl.getUniformLocation(
        program,
        "iResolution"
      );

    const timeLocation =
      gl.getUniformLocation(
        program,
        "iTime"
      );


    /* =========================================
       RESIZE
       ========================================= */

    const resize = () => {
      const dpr = Math.min(
        window.devicePixelRatio || 1,
        2
      );

      const width =
        canvas.clientWidth * dpr;

      const height =
        canvas.clientHeight * dpr;

      if (
        canvas.width !== width ||
        canvas.height !== height
      ) {
        canvas.width = width;
        canvas.height = height;
      }

      gl.viewport(
        0,
        0,
        canvas.width,
        canvas.height
      );
    };


    /* =========================================
       ANIMATION
       ========================================= */

    let animationFrame;

    const startTime = performance.now();

    const render = (currentTime) => {
      resize();

      const elapsed =
        (currentTime - startTime) /
        1000;

      gl.clearColor(
        0.008,
        0.009,
        0.012,
        1
      );

      gl.clear(
        gl.COLOR_BUFFER_BIT
      );

      gl.useProgram(program);


      /* Position */

      gl.bindBuffer(
        gl.ARRAY_BUFFER,
        positionBuffer
      );

      gl.enableVertexAttribArray(
        positionLocation
      );

      gl.vertexAttribPointer(
        positionLocation,
        2,
        gl.FLOAT,
        false,
        0,
        0
      );


      /* Shader uniforms */

      gl.uniform2f(
        resolutionLocation,
        canvas.width,
        canvas.height
      );

      gl.uniform1f(
        timeLocation,
        elapsed
      );


      /* Draw */

      gl.drawArrays(
        gl.TRIANGLES,
        0,
        6
      );

      animationFrame =
        requestAnimationFrame(render);
    };

    animationFrame =
      requestAnimationFrame(render);


    /* =========================================
       CLEANUP
       ========================================= */

    return () => {
      cancelAnimationFrame(
        animationFrame
      );

      gl.deleteBuffer(
        positionBuffer
      );

      gl.deleteProgram(
        program
      );

      gl.deleteShader(
        vertexShader
      );

      gl.deleteShader(
        fragmentShader
      );
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="shader-background"
      aria-hidden="true"
    />
  );
}

export default ShaderBackground;
import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
} from "motion/react";

import "./CustomCursor.css";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const activeElementRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const dotX = useSpring(mouseX, {
    stiffness: 900,
    damping: 45,
    mass: 0.15,
  });

  const dotY = useSpring(mouseY, {
    stiffness: 900,
    damping: 45,
    mass: 0.15,
  });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;

      const activeElement = activeElementRef.current;

      if (activeElement) {
        const rect = activeElement.getBoundingClientRect();

        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // How strongly the cursor is pulled
        const magneticStrength = 0.18;

        const targetX =
          clientX +
          (centerX - clientX) * magneticStrength;

        const targetY =
          clientY +
          (centerY - clientY) * magneticStrength;

        mouseX.set(targetX);
        mouseY.set(targetY);
      } else {
        mouseX.set(clientX);
        mouseY.set(clientY);
      }
    };

    const handlePointerOver = (event) => {
      const target = event.target.closest(
        "a, button, [data-magnetic]"
      );

      if (!target) return;

      activeElementRef.current = target;
    };

    const handlePointerOut = (event) => {
      const target = event.target.closest(
        "a, button, [data-magnetic]"
      );

      if (!target) return;

      if (
        event.relatedTarget &&
        target.contains(event.relatedTarget)
      ) {
        return;
      }

      activeElementRef.current = null;
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    document.addEventListener(
      "pointerover",
      handlePointerOver
    );

    document.addEventListener(
      "pointerout",
      handlePointerOut
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      document.removeEventListener(
        "pointerover",
        handlePointerOver
      );

      document.removeEventListener(
        "pointerout",
        handlePointerOut
      );
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      ref={dotRef}
      className="custom-cursor"
      style={{
        x: dotX,
        y: dotY,
      }}
    />
  );
};

export default CustomCursor;
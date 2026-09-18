import BackgroundGrid from "../Effects/BackgroundGrid";
import BlueGlow from "../Effects/BlueGlow";
import Noise from "../Effects/Noise";

import ActivityBar from "../ActivityBar/ActivityBar";
import SiteIdentity from "../Metadata/SiteIdentity";
import PageMetadata from "../Metadata/PageMetadata";

import "./PageShell.css";

function PageShell({ children }) {
  return (
    <main className="page-shell">
      <BackgroundGrid />

      <BlueGlow />

      <Noise />

      <SiteIdentity />

      <PageMetadata />

      <ActivityBar />

      <div className="page-shell__content">
        {children}
      </div>
    </main>
  );
}

export default PageShell;
import BackgroundGrid from "../Effects/Backgroundgrid";
import Noise from "../Effects/Noise";
import BlueGlow from "../Effects/BlueGlow";

import ActivityBar from "../ActivityBar/ActivityBar";
import SiteIdentity from "../Metadata/SiteIdentity";
import PageMetadata from "../Metadata/PageMetadata";

import "./PageShell.css";

function PageShell({
  children,
  pageNumber,
  pageName,
}) {
  return (
    <main className="page-shell">

      <BackgroundGrid />
      <BlueGlow />
      <Noise />

      <SiteIdentity />

      <PageMetadata
        pageNumber={pageNumber}
        pageName={pageName}
      />

      <ActivityBar />

      <div className="page-shell__content">
        {children}
      </div>

    </main>
  );
}

export default PageShell;
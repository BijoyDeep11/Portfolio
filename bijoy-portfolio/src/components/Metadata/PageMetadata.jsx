import "./Metadata.css";

function PageMetadata({
  pageNumber,
  pageName,
}) {
  return (
    <div className="page-metadata">
      <div>2026</div>

      <div>
        {pageNumber} / 06
      </div>

      <div>
        {pageName}
      </div>
    </div>
  );
}

export default PageMetadata;
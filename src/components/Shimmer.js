
const ShimmerCard = () => (
  <div className="shimmer-card">
    <div className="shimmer shimmer-image"></div>
    <div className="shimmer shimmer-title"></div>

    <div className="shimmer-cuisines">
      <div className="shimmer shimmer-tag"></div>
      <div className="shimmer shimmer-tag"></div>
      <div className="shimmer shimmer-tag shimmer-tag-small"></div>
    </div>

    <div className="shimmer shimmer-rating"></div>
    <div className="shimmer shimmer-price"></div>
    <div className="shimmer shimmer-time"></div>
  </div>
);

const Shimmer = () => {
  return (
    <div className="body">
      <div className="shimmer-buttons">
        <div className="shimmer shimmer-filter-button"></div>
        <div className="shimmer shimmer-clear-button"></div>
      </div>

      <div className="res-container">
        {Array(12)
          .fill("")
          .map((_, index) => (
            <ShimmerCard key={index} />
          ))}
      </div>
    </div>
  );
};

export default Shimmer;

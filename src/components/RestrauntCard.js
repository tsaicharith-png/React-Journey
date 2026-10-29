import { CDN_URL } from "../utils/constants";

const RestrauntCard = ({ resData }) => {
  const { info } = resData;

  return (
    <div className="res-card">
      <img
        alt={info.name}
        className="res-logo"
        src={
          CDN_URL +
          info.cloudinaryImageId
        }
      />

      <div className="res-name">{info.name}</div>

      <div className="res-cusine">
        <ul>
          {info.cuisines.map((cuisine) => (
            <li key={cuisine}>{cuisine}</li>
          ))}
        </ul>
      </div>

      <div className="res-rating">{info.avgRating} Rating</div>
      <div className="res-price">{info.costForTwo}</div>
      <div className="res-time">{info.sla.deliveryTime} minutes</div>
    </div>
  );
};

export default RestrauntCard;
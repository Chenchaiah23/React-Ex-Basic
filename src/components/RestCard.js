import { LOGO_URL } from "../utils/constants";
const RestCard = (props) => {
  const restData = props;
  const { name, avgRating, sla, cloudinaryImageId } = restData?.restData.info;
  return (
    <div className="m-4 p-4 w-52 shadow-2xl bg-green-100">
      <img className="rounded-lg " src={LOGO_URL + cloudinaryImageId} />
      <h3 className="font-bold py-2"> {name}</h3>
      <h4> {avgRating}</h4>
      <h4> {sla.slaString}</h4>
    </div>
  );
};
//Higher Order Component
export const withBestLabel = (RestCard) => {
  return (props) => {
    return (
      <div>
        <label
          style={{
            position: "absolute",
            backgroundColor: "black",
            color: "white",
          }}
        >
          <b>Best Rest</b>
        </label>
        <RestCard {...props} />
      </div>
    );
  };
};
export default RestCard;

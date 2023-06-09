import { imageApi } from "./Constants";

const RestuarantCard = (props) => {
    const {cloudinaryImageId, name, avgRating, area, costForTwo, cuisines } = props.data;

    return (
        <div className="card">
            <img src={imageApi + cloudinaryImageId} alt="Restuarant Poster"/>
            <h3> {name} </h3>
            <p> {cuisines?.join(', ')?.slice(0, 30)} </p>
            <p> {avgRating} </p>
            <p> {area} </p>
            <p> Cost for Two: {costForTwo / 100} </p>
        </div>
    );
};

export default RestuarantCard;
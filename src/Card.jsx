import "./Card.css";
import { useNavigate } from "react-router-dom";
export default function Card({ data }) {
    var navigate = useNavigate();
        const goToMenu = () => {
        navigate(`/restaurant/${data.id}/menu`);
    }
    return <div className="restaurant" onClick={goToMenu}>
        <img className="restaurant-image" src = {data.RestaurantImage}></img>
        <h3>{data.name}</h3>
        <p> {data.street} , {data.city}, {data.state}</p>
        <p>{data.distance} KM away from you</p>
        <h3>Status : {String(data.open) === "true"?"Open right now":"Unavailable"}</h3>
    </div>
}
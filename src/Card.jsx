import "./Card.css";
export default function Card({ data }) {
    return <div className="restaurant">
        <h3>Restaurant name : {data.name}</h3>
        <p>city is : {data.city}</p>
        <p>street is : {data.street}</p>
        <p>state is : {data.state}</p>
        <p>Distance is : {data.distance} KM</p>
        <h3>Status : {String(data.open)}</h3>
    </div>
}
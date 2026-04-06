export default function Card({ data }) {
    return <div>
        <h1>Restaurant name : {data.name}</h1>
        <p>city is : {data.city}</p>
        <p>street is : {data.street}</p>
        <p>state is : {data.state}</p>
        <p>Distance is : {data.distance} KM</p>
        <h3>Status : {String(data.open)}</h3>
    </div>
}
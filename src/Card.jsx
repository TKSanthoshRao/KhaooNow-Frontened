export default function Card({ data }) {
    return <div>
        <h1>Restaurant name : {data.name}</h1>
        <p>Distance is : {data.distance}</p>
        <h3>Status : {String(data.open)}</h3>
    </div>
}
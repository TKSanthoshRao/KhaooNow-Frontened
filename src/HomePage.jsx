import RestaurantContainer from "./RestaurantContainer";

export default function HomePage() {
    const userName = sessionStorage.getItem("userName");

    return (
        <>
            <h1>Hello👋 {userName} Welcome to Khaaonow</h1>
            <p>A Food Delivering Platform</p>
            <RestaurantContainer />
        </>
    );
}
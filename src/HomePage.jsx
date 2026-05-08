import RestaurantContainer from "./RestaurantContainer";
import {useAuth} from "./context/AuthContext";

export default function HomePage() {

    const { authUser, loading } = useAuth();

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="home-container">

            <h1>
                Hello 👋 {authUser?.fullName} Welcome to KhaaoNow
            </h1>

            <p>A Food Delivering Platform</p>

            <RestaurantContainer />

        </div>
    );
}
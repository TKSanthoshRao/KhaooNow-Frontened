import { useEffect, useState } from "react";
import Card from "./Card";
import { callOnload } from "./service/RestaurantService";
import "./Card.css";
import { useNavigate } from "react-router-dom";

function RestaurantContainer() {
    const [arr, setArr] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const getLocation = () => {
            return new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        resolve({
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                        });
                    },
                    (error) => reject(error)
                );
            });
        };

        const fetchData = async () => {
            try {
                const { lat, lng } = await getLocation();
                console.log(lat, lng);

                const response = await callOnload(lat, lng);
                setArr(response);
            } catch (error) {
                console.log(error);
                        if (error.message === "401") {
                        sessionStorage.clear();
                        navigate("/login");
                    }
            }finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

        if (loading) {
        return (
            <div className="loading-container">
                <div className="spinner"></div>
                <p>Loading restaurants...</p>
            </div>
        );
    }

    return (
        <div className="restaurants-container">
            {arr.length > 0 ? (
                arr.map((item) => (
                    <Card key={item.id} data={item} />
                ))
            ) : (
                <p>No data available</p>
            )}
        </div>
    );
}

export default RestaurantContainer;

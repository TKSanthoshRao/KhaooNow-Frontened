import { useEffect, useState } from "react";
import Card from "./Card";
import { callOnload } from "./service/RestaurantService";

function HomePage() {
    const [arr, setArr] = useState([]);

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
                console.error("Error:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="card-container">
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

export default HomePage;

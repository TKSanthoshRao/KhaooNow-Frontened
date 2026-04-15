import {restaurantMenu} from "./service/RestaurantService"
import FoodCard from "./FoodCard";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import "./RestaurantMenu.css"
;export default function RestaurantMenu(){

        const [arr, setArr] = useState([]);
        const [loading, setLoading] = useState(true);
        const { restaurantid } = useParams();
    useEffect(() => {
       const fetchMenu = async () => {
            try{
                const response = await restaurantMenu(restaurantid);
                setArr(response);
            } catch (error) {
                console.error("Error:", error);
            }finally{
                setLoading(false);
            }
        }
        fetchMenu();
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
            <div className="food-container">
                {arr.length > 0 ? (
                    arr.map((item) => (
                        <FoodCard key={item.id} data={item} />
                    ))
                ) : (
                    <p>No data available</p>
                )}
            </div>
        );
}
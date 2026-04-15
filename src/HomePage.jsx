import RestaurantContainer from "./RestaurantContainer";
import ProfileMenu from "./ProfileMenu";
import "./Homepage.css";
import {loggedInUser} from "./service/AuthService"
import { useEffect,useState } from "react";

export default function HomePage() {
     const [userName, setUserName] = useState("");
     const [user, setUser] = useState(null);
    useEffect(() => {
            const fetchLoggedInUserBasicData = async () => {
                try{
                    const response = await loggedInUser();
                    setUser(response);
                    setUserName(response.fullName);
                }catch(error){
                     console.log(error);
                }
            };
          fetchLoggedInUserBasicData();  
    }, []);

    return (
            <div className="home-container">
                <img className="app-logo" src = "src\khaanow-logo.png" height={200} width={200}></img>
                <ProfileMenu LoggedInuser = {user} />
                <h1>Hello 👋 {userName} Welcome to Khaaonow</h1>
                <p className="tagline">A Food Delivering Platform</p>
                <RestaurantContainer />
            </div>
    );
}
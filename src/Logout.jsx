import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
    sessionStorage.removeItem("token");
    const navigate = useNavigate();
    const [count, setCount] = useState(3);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prev) => prev - 1);
        }, 1000);

        const timer = setTimeout(() => {
            navigate("/login");
        }, 3000);

        return () => {
            clearInterval(interval);
            clearTimeout(timer);
        };
    }, [navigate]);

    return (
        <div style={{ textAlign: "center", marginTop: "100px" }}>
            <h1>User Logged Out Successfully ✅</h1>
            <p>Redirecting to login page in <b>{count}</b> seconds...</p>
        </div>
    );
}

export default Logout;
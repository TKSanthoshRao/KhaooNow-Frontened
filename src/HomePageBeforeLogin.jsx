import { useNavigate } from "react-router-dom";
export default function HomePageBeforeLogin() {
    var navigate = useNavigate();
    const NavigateToLogin = (event) => {
        event.preventDefault();
        navigate("/login");
    }
    // styles = {backgroundColor:blue}
    return (
        <>
            <h1>Welcome to KhaaoNow</h1>
            <button type="button" onClick={NavigateToLogin}>Login</button>
        </>
    );
}
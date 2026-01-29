import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginUser } from "./service/AuthService";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault(); // prevent page reload

        try {
            const result = await LoginUser(email, password);

            // store token / username
            localStorage.setItem("token", result.token);
            localStorage.setItem("username", result.username);

            // redirect on success
            navigate("/");
        } catch (err) {
            alert("Login failed. Check credentials.");
        }
    };

    return (
        <div>
            <form onSubmit={handleLogin}>
                <label>Enter your email:</label>
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br /><br />

                <label>Enter your password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br /><br />

                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;

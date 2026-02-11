import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const token = sessionStorage.getItem("token");
    alert(token);

    if (!token) {
        console.log("came into protected resource");
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default ProtectedRoute;

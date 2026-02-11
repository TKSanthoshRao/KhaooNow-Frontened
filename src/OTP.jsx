import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { EmailOTP, verifyEmailOtp } from "./service/AuthService";

export default function OTP() {
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [otpSent, setOtpSent] = useState(false);
    const navigate = useNavigate();

    const sendOtp = async (e) => {
        e.preventDefault();

        try {
            const res = await EmailOTP(email);

            if (res.status === "sent") {
                alert("OTP sent successfully");
                setOtpSent(true); 
            } else {
                alert(res.status || "Failed to send OTP");
            }
        } catch {
            alert("Server error. Please try again.");
        }
    };

    const verifyOtp = async (e) => {
        e.preventDefault();

        try {
            const res = await verifyEmailOtp(email, otp);

            if (res.status === "success") {
                alert("Email verified successfully");
                navigate("/signUp");
            } else {
                alert(res.status || "Invalid OTP");
            }
        } catch {
            alert("Server error. Please try again.");
        }
    };

    return (
        <div>
            {!otpSent ? (
                /* STEP 1: EMAIL */
                <form onSubmit={sendOtp}>
                    <label>Enter your Email :</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <br /><br />
                    <button type="submit">Send OTP</button>
                </form>
            ) : (
                /* STEP 2: OTP */
                <form onSubmit={verifyOtp}>
                    <label>Enter OTP :</label>
                    <input
                        type="text"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        required
                    />
                    <br /><br />
                    <button type="submit">Verify OTP</button>
                </form>
            )}
        </div>
    );
}

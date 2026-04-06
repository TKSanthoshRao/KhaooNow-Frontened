export const signUp = async (name, email, password) => {
    try {
        const response = await fetch("https://x0hdtl-ip-38-183-54-167.tunnelmole.net/api/v1/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                email,
                password,
            }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(errorText || "Signup failed");
        }

        alert("sign up successful");
        return await response.json();
    } catch (err) {
        alert("Signup error:", err);
        throw err; // let UI handle it
    }
};


export const LoginUser = async (email, password) => {
    try {
        const response = await fetch("https://x0hdtl-ip-38-183-54-167.tunnelmole.net/api/v1/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: email,
                password: password
            }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(errorText || "Login failed");
        }

        const data = await response.json();

        return {
            token: data.token,
            username: data.username
        };

    } catch (err) {
        console.error("Login error:", err);
        throw err;
    }
};

export const EmailOTP = async (email) => {
    try {
        const response = await fetch(`https://x0hdtl-ip-38-183-54-167.tunnelmole.net/api/v1/auth/email-verification/token`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email
            })
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(errorText || "Login failed");
        }
        var data = await response.json();
        return data;

    } catch (err) {
        console.error("response error:", err);
        throw err;
    }
};

// https://unapproaching-chylaceous-spring.ngrok-free.dev
// http://localhost:8080

export const verifyEmailOtp = async (email,otp) => {
    try {
        const response = await fetch(`https://x0hdtl-ip-38-183-54-167.tunnelmole.net/api/v1/auth/email-verification/verify`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                token:otp
            })
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(errorText || "OTP verification failed");
        }
        var data = await response.json();
        return data;

    } catch (err) {
        console.error("response error:", err);
        throw err;
    }
};
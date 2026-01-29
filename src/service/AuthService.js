import { Navigate } from "react-router-dom";

export const signUp = async (name, email, password) => {
    console.log("entered signup method");

    try {
        const response = await fetch("http://localhost:8080/api/v1/auth/register", {
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
        const response = await fetch("http://localhost:8080/api/v1/auth/login", {
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

        const data = await response.json(); // ✅ parse JSON

        // assuming backend returns { token, username }
        return {
            token: data.token,
            username: data.username
        };

    } catch (err) {
        console.error("Login error:", err);
        throw err;
    }
};


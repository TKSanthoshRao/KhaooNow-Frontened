export const callOnload = async (lat, lng) => {
    var token = localStorage.getItem("token");
    try {
        const response = await fetch(`http://localhost:8080/api/v1/restaurants?lat=${lat}&lng=${lng}`, {
            method: "GET",
            headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
            }
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(errorText || "Restaurant failed");
        }

        const data = await response.json();
        return data;

    } catch (err) {
        console.error(err);
        throw err;
    }
};

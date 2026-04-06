export const callOnload = async (lat, lng) => {
    var token = sessionStorage.getItem("token");
    try {
        const response = await fetch(`https://x0hdtl-ip-38-183-54-167.tunnelmole.net/api/v1/restaurants?lat=${lat}&lng=${lng}`, {
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

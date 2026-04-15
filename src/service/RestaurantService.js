var link = "http://KhaaoNow-env.eba-7mvd9uhh.us-east-1.elasticbeanstalk.com";
export const callOnload = async (lat, lng) => {
    var token = sessionStorage.getItem("token");
    try {
        const response = await fetch(link + `/api/v1/restaurants?lat=${lat}&lng=${lng}&radius=20`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(response.status);
        }
        const data = await response.json();
        return data;

    } catch (err) {
        console.error(err);
        throw err;
    }
};



export const restaurantMenu = async (restaurantid) => {
    var token = sessionStorage.getItem("token");

    try {
        const response = await fetch(link + `/api/v1/restaurant/${restaurantid}/menu`, {
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
}
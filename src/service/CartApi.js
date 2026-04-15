var link = "http://KhaaoNow-env.eba-7mvd9uhh.us-east-1.elasticbeanstalk.com/api/v1/cart-item"
export const addCartItemToCart = async (foodItem, quantity) => {
    var token = sessionStorage.getItem("token");
    try {
        const response = await fetch(link + `/${foodItem}?quantity=${quantity}`, {
            method: "POST",
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
}
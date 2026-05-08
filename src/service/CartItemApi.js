var link = "https://3nh8dw-ip-114-134-27-142.tunnelmole.net/api/v1/cart/items"
export const addCartItemToCart = async (foodItem, quantity,forceFlag) => {
    var token = sessionStorage.getItem("token");
    try {
        const response = await fetch(link + `/${foodItem}?quantity=${quantity}&force=${forceFlag}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });
        if (!response.ok) {
            const errorData = await response.json();
            const error = new Error("Cart contains items from another restaurant");
            error.status = response.status;
            error.data = errorData;
            throw error;
        }

        const data = await response.json();
        return data;
    } catch (err) {
        console.error(err);
        throw err;
    }
}
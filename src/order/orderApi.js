var link = "https://3nh8dw-ip-114-134-27-142.tunnelmole.net";
export const createTemporaryOrder = async (userCart) => {
    var token = sessionStorage.getItem("token");
    try{
   const response =  await fetch(link + "/api/v1/order",{
    method : "POST",
    headers: {
    "Content-Type": "application/json",
    "Authorization":`Bearer ${token}`
    },
     body: JSON.stringify({
     cart: userCart
    }),
   });

   if (!response.ok) {
            const errorText = await response.text();
            throw new Error(errorText || "Temporary order creation failed");
        }
    return await response.json();
    } catch (err) {
        alert("Order Creation error:", err);
        throw err; 
    }
}
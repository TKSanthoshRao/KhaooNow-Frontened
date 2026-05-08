// http://KhaaoNow-env.eba-7mvd9uhh.us-east-1.elasticbeanstalk.com
var link = "https://3nh8dw-ip-114-134-27-142.tunnelmole.net/api/v1/cart"
export const cartDetails = async () => {
    var token = sessionStorage.getItem("token");
    try{
        const response = await fetch(`${link}/items`,{
            method:"GET",
            headers:{
                    "Content-Type":"applicatilon/json",
                    "Authorization":`Bearer ${token}`

            }
        });

        if(!response.ok){
            const errorData = await response.json();
            const error = new Error("Failed to fetch data");
            error.status = response.status;
            error.data = errorData;
            throw error;

        }

        const data = await response.json();
        return data;

    }catch(error){
        console.error(err);
        throw err;
    }
}
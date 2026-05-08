import { useCart } from "../context/CartContext";
import {createTemporaryOrder} from "../order/orderApi"

export default function CheckOut() {

    const { cart } = useCart();

    function createTempOrder(){
        createTemporaryOrder(cart);
    }

    return (

        <>

            <img
                src={cart?.restaurantImage}
                alt="restaurant"
                width="200"
            />

            <p>{cart?.restaurantName}</p>

            {cart?.cartItems?.map((item, index) => (

                <div key={index}>

                    <p>
                        Food Item Name :
                        {item?.foodItemDto?.itemName}
                    </p>

                    <p>
                        Price :
                        ₹{item?.foodItemDto?.itemPrice}
                    </p>

                    <p>
                        Quantity :
                        {item?.quantity}
                    </p>

                    <hr />

                </div>

            ))}

            <button onClick={createTempOrder}>proceed To payment</button>

        </>

    );
}
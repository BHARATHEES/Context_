import { useCart } from "../contexts/CartContext";

export default function CartView(){
    const {cart, removeFromCart}=useCart();
    return(
        <div>
            <h3>Cart</h3>
            {cart.length ===0 ? (
                <p>Your cart is Empty</p>
            ):(
                cart.map((item) => (
                    <div key={item.id} style={{marginBottom: "8px"}}>
                        {item.name}{" "}
                        <button onClick={() => removeFromCart(item.id)} >Remove Product</button>
                    </div>
                ))
            )}
        </div>
    )
}
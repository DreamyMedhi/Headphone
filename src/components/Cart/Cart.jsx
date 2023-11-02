import "./Cart.scss";
import {MdClose} from 'react-icons/md';
import{BsCartX} from "react-icons/bs";
import CartItem from "./CartItem/CartItem";
import { useContext } from "react";
import { Context } from "../../utils/context";
import Information from "../Checkout/Infromation";
import {useNavigate} from "react-router-dom";
// import {loadStripe} from "@stripe/stripe-js";


const Cart = ({setShowCart}) => {
    const {cartItems,cartSubTotal}=useContext(Context);
   


    const navigate=useNavigate();

    return <div className="cart-panel">
        <div className="opac-layer"></div>
        <div className="cart-content"> 
        <div className="cart-header">
            <span className="heading">ShoppingCart</span>
            <span className="close-btn" onClick={()=>setShowCart(false)}>
            <MdClose/>
                <span className="text">close</span>
            </span>
        </div>

        {!cartItems?.length && <div className="empty-cart">
                <BsCartX/>
                <span>No Products in the cart.</span>
                <button className="return-cta">RETURN TO SHOP</button>
        </div>}

        

       {!!cartItems?.length && <>
            <CartItem/>
            {/* <Information/> */}
            <div className="cart-footer">
                <div className="subtotal">
                    <span className="text">Subtotal</span>
                    <span className="text total">&#8377;{cartSubTotal}</span>
                </div>
                <div className="button">
                <button className="checkout-btn" 
                onClick={()=>navigate('/information')}
                >Add address</button>
                </div>
            </div>
        </>}

        {/* <Information/> */}

    </div>

    </div>
};

export default Cart;

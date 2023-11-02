import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Infromation.scss";

const Information = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const handleCheckout = () => {
    navigate('/final', { state: { inputValue: name } });
  };

  return (
    <div className="address">
      <div className="text-input">
        <input
         name="name"
          type="text"
          className="text"
          placeholder="Enter your Name"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input type="email" placeholder="Enter Email address" name="email"></input>
       <input type="text" placeholder="Enter pincode" name="pin"></input>
       <input type="text" placeholder="Enter State" name="state"></input>
       <input type="text" placeholder="Enter Full address" name="address"></input>
       <input type="text" placeholder="Enter House No" name="house"></input>
       <input type="text" placeholder="Enter Phone Number" name="phone"></input>

        <button className="checkout-btn" onClick={handleCheckout}>
          Check out
        </button>
      </div>
    </div>
  );
};

export default Information;

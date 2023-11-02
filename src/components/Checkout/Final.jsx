import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Final = () => {
  const location = useLocation();
  const inputValue = location.state && location.state.inputValue;
  const navigate=useNavigate();

  return (
    <div className="final-content">
      <div className="final-heading">
      <h1>Congratulation! {inputValue}</h1>
        <h3>Your order is being placed!</h3>
        <button type="submit"
        onClick={()=>navigate('/sms')}
        >Send Sms</button>

      </div>
    </div>
  );
};

export default Final;

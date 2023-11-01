import "./Footer.scss";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting.
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow size={14} />
            <div className="text">Lankeshwar Gohain Nagar,Tinsukia,Assam
            </div>
          </div>
          <div className="c-item">
            <FaMobileAlt size={14} />
            <div className="text">
            +91 9876543210,Landline-008654281
            </div>
          </div>
          <div className="c-item">
            <FaEnvelope size={14} />
            <div className="text">
             Email: dreamzoneofficial@gmail.com
            </div>
          </div>
        </div>
        <div className="col">
          <div className="title">Category</div>
          <div className="text">Customized T-shirt</div>
          <div className="text">Smart Watches</div>
          <div className="text">Bluetooth Speaker</div>
          <div className="text">Wireless Earbuds</div>
          <div className="text">Home Theatre</div>
          <div className="text">Headphones</div>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy</span>
          <span className="text">Returns</span>
          <span className="text">Terms & Conditions</span>
          <span className="text">Contact Us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <div className="text">
            DREAMZONE 2023 CREATED BY DREAMY MEDHI.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

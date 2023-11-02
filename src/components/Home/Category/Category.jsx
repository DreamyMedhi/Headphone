import "./Category.scss";
import {useNavigate} from "react-router-dom";//this is use to set the router path

const Category = ({categories}) => {
    const navigate=useNavigate();//creating an instance
    return <div className="shop-by-category">
        <div className="categories">
            {categories?.data?.map((item)=>(
                <div 
                key={item.id}
                className="category"
                onClick={()=>navigate(`/category/${item.id}`)}//setting the path when clicked on any of the product
                >
                <img src={process.env.REACT_APP_STRIPE_APP_DEV_URL
                +
                item.attributes.img.data.attributes.url
            } alt="this an image"></img> 
            </div>

            ))}
           
          
        </div>
    </div>;
};

export default Category;


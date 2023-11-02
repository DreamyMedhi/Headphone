import "./Category.scss";
import Products from "../Products/Products";
import { useParams } from "react-router-dom";//to access the id from the url
import useFetch from "../../hooks/useFetch";

const Category = () => {
    const {id} =useParams();
    const { data } = useFetch(
        `/api/products?populate=*&[filters][categories][id]=${id}`
       
    );
    // console.log(data);
   
    return( <div className="category-main-content">
        <div className="layout">
            <div className="category-title">
                {data?.data?.[0]?.attributes?.categories?.data?.[0]?.attributes?.title}
            </div>
            <div className="products-container">
            <Products innerPage={false} products={data} />
            </div>
           
        </div>

        
    </div>);
};

export default Category;

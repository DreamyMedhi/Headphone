import "./Products.scss";

import Product from "./Product/Product"


const Products = ({innerPage,headingText,products}) => {
    return (
        <div className="products-conatiner">
            {!innerPage && <div className="src-heading">{headingText}</div>}
 {/* we have put not here bcz innerPage is not rendered in the Home. and it will show only where it is not rendered */}
            <div className="products">
            {products?.data?.map((item)=>(
                <Product key={item.id}
                    id={item.id}
                    data={item.attributes}
                />
            ))}
               
              
            </div>
        </div>
    );
};

export default Products;

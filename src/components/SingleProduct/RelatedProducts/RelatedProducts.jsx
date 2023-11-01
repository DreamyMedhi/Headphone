import Products from "../../Products/Products";
import useFetch from "../../../hooks/useFetch";
import SingleProduct from "../SingleProduct";


const RelatedProducts = ({productId,categoryId}) => {
    const {data}=useFetch(`/api/products?populate=*&filters[id][$ne]=${productId}&filters[categories][id]=${   categoryId}&pagination[start]=0&pagination[limit]=7`)
    return <div>
        <Products headingText="Realted Products" products={data}/>
    </div>;
};

export default RelatedProducts;

import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const params = useParams();
    return (
        <div>
            Product Details..
            {params.problemId}
        </div>
    );
}

export default ProductDetails;
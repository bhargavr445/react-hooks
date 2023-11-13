import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductDetails = () => {

    // const selector = useSelector((state) => {
       
    //     return state.problemsState
    // });

    // const params = useParams();
    return (
        <div>
            Product Details..
            {/* {selector.moduleName} */}
            {/* {params.problemId} */}
        </div>
    );
}

export default ProductDetails;
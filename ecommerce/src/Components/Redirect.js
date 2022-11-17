import {useParams} from 'react-router'
import ProductScreen from "./ProductScreen";

function Redirect() {
    let { id } = useParams();
    return <div>
             <ProductScreen slug={id}/>
           </div>;
}

export default Redirect;
import {useParams} from 'react-router'
import Search from './Search'

function Redirect2() {
    let { query } = useParams();
    return <div>
             <Search query={query}/>
           </div>;
}

export default Redirect2;
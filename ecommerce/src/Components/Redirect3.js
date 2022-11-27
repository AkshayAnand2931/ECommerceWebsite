import {useParams} from 'react-router'
import Profile from './Profile';

function Redirect3() {
    let { user } = useParams();
    return <div>
             <Profile user={user}/>
           </div>;
}

export default Redirect3;
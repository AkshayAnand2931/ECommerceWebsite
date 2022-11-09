
import './App.css';
import {Route,Routes} from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Men from './Components/Men';
import Women from './Components/Women';
import Shoes from './Components/Shoes';
import Profile from './Components/Profile';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <div>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/men' element={<Men/>}></Route>
          <Route path='/women' element={<Women/>}></Route>
          <Route path='/shoes' element={<Shoes/>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;

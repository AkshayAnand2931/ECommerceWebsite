import './App.css';
import {Route,Routes} from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Men from './Components/Men';
import Women from './Components/Women';
import Shoes from './Components/Shoes';
import Footer from './Components/Footer';
import Kids from './Components/Kids'
import Redirect from './Components/Redirect';
import Redirect2 from './Components/Redirect2';
import SigninScreen from './screens/SignInScreen';
import Bag from './Components/Bag';
import Checkout from './Components/Checkout'
import Redirect3 from './Components/Redirect3';
import SignUpScreen from './screens/SignUpScreen';

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
          <Route path='/kids' element={<Kids/>}></Route>
          <Route path='/shoes' element={<Shoes/>}></Route>
          <Route path='/bag' element={<Bag/>}></Route>
          <Route path='/profile' element={<SigninScreen/>}></Route>
          <Route path='/checkout' element={<Checkout/>}></Route>
          <Route path='/signup' element={<SignUpScreen/>}></Route>
          <Route path='/product/:id' element={<Redirect/>}></Route>
          <Route path='/search/:query' element={<Redirect2/>}></Route>
          <Route path='/users/:user' element={<Redirect3/>}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
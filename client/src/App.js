import logo from './logo.svg';
import './App.css';
import './util.css'
import Men from './components/Men'
import Women from './components/Women'
import Cart from './components/Cart'
import { Router, Routes ,Route, BrowserRouter} from 'react-router-dom';
import Home from './Home'
import Jwellery from './components/Jwellery';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductDetail from './components/products/ProductDetail'
import Wishlist from './wishlist/Wishlist';
import PaymentPage from './checkout_page/PaymentPage';
import Register from './components/Register'
import Login from './components/Login';
import Profile from './components/Profile';


function App() {
  return (
    <div>

    <BrowserRouter>
  
    <Routes>
    <Route path='/' element={<Home/>}/>
     <Route path='/men' element={<Men/>}/>
      <Route path='/women' element={<Women/>}/>
      <Route path='/jwellery' element={<Jwellery/>}/>
      <Route path='/product/:idP' element={<ProductDetail/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/profile' element={<Profile/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>
      <Route path='/payment' element={<PaymentPage/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
    <ToastContainer/>
    </BrowserRouter>
  
    </div>
  );
}

export default App;

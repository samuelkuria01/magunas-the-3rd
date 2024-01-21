import './App.css';
import{Routes, Route} from 'react-router-dom'
import Home from './Components/Home';
import Category from './Components/Categroy';
import Cart from './Components/Cart'
import Products from './Components/Products';
import { CartProvider } from 'react-use-cart';
import NavBar from './Components/NavBar';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import NewProducts from './Components/NewProducts';

function App() {
  return (
    <div className="App">
      <CartProvider>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/categories/:id' element={<Category />} />
        <Route path='/categories/:id/products/:productId' element={<Products />} />
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/newproducts' element={<NewProducts />}></Route>
      <Route path='/users/sign_in' element={<Login />}></Route>
      <Route path='/users/sign_up' element={<SignUp />}></Route>
      </Routes>
      </CartProvider>
    </div>
   

  );
}

export default App;
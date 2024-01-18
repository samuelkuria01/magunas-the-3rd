import logo from './logo.svg';
import './App.css';

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
      </Routes>
      </CartProvider>
    </div>
   

  );
}

export default App;
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/home'
import ItemStore from './Pages/items'
import Cart from './Pages/cart'
import WishList from './Pages/wishlist'
import Footer from './Components/Footer/index'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/shop' element={<ItemStore/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/wishlist' element={<WishList/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

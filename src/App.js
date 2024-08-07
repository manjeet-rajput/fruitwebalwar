import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './component/Home';
import Shop from './component/Shop';
import Product from './component/Product';
import Pages from './component/Pages';
import Blog from './component/Blog';
import Wishlist from './component/Wishlist';
import Profile from './component/Profile';
import Bag from './component/Bag';
import Header from './Header';
import Footer from './Footer';
import Homeproduct from './apicomponent/Homeproduct';
function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />  
          <Route path="/product" element={<Homeproduct />} />  
          <Route path="/pages" element={<Pages />} />  
          <Route path="/blog" element={<Blog />} />  
          <Route path="/wishlist" element={<Wishlist />} />  
          <Route path="/profile" element={<Profile />} />  
          <Route path="/bag" element={<Bag />} />  
          
        </Routes>

  

        <Footer/>
        </BrowserRouter>

    </div>
  );
}

export default App;
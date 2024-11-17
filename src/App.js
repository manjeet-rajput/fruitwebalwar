import './App.css';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Home from './component/Home';
import Blog from './component/Blog';
import Wishlist from './component/Wishlist';
import Profile from './component/Profile';
import Bag from './component/Bag';
import Header from './Header';
import Footer from './Footer';
import About from './component/About';
import Contact from './component/Contact';
// import Product from './component/Product';
import Chikin from './product/Chikin';
import Coldrink from './product/Coldrink';
import Fruit from './product/Fruit';
import Vegitarible from './product/Vegitarible'
import Viewitem from './component/Viewitem';
// import Homeproduct from './apicomponent/Homeproduct';
function App() {
  return (
    <div>
      
      <BrowserRouter>
  
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/product" element={< Product/>} /> */}
          <Route path="/about" element={< About/>} />
          <Route path="/contact" element={< Contact/>} />
          <Route path="/blog" element={<Blog />} />  
          <Route path="/wishlist" element={<Wishlist />} />  
          <Route path="/profile" element={<Profile />} />  
          <Route path="/bag" element={<Bag />} />  
          <Route path='/vegetable' element={<Vegitarible/>}/>
          <Route path='/Fruits' element={<Fruit/>}/>
          <Route path='/drink' element={<Coldrink/>}/>
          <Route path='/meat' element={<Chikin/>}/>
          <Route path="/view/:id" element={<Viewitem />} />

          

          
        </Routes>

  

        <Footer/>
        </BrowserRouter>

    </div>
  );
}

export default App;
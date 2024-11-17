import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../component css/viewitem.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import { faStar, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Swal from 'sweetalert2';

function Viewitem() {
  const { id } = useParams();
  const [product, setProduct] = useState(null); 
  const [loading, setLoading] = useState(true);
  const [wishlist, setWishlist] = useState([]);
  

  

  useEffect(() => {
   
    axios.get(`https://66c83807732bf1b79fa89cc1.mockapi.io/api/v1/fruit/${id}`)
      .then(response => {
        setProduct(response.data); 
        setLoading(false); 
      })
      .catch(error => {
        console.error('Error fetching product data:', error);
        setLoading(false);
      });

      const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlist(storedWishlist);

  }, [id]);

  if (loading) {
    return <div className="loader"></div>; 
  }

  if (!product) {
    return <p>Product not found</p>; 
  }

  const toggleWishlist = (item) => {
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const isInWishlist = storedWishlist.some(wishItem => wishItem.id === item.id);
    const updatedWishlist = isInWishlist
      ? storedWishlist.filter(wishItem => wishItem.id !== item.id)
      : [...storedWishlist, { id: item.id, name: item.name, image: item.image[0], category: item.category, price: item.price }];
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    setWishlist(updatedWishlist);
  };

  const toggleCart = (item) => {
    const storedBag = JSON.parse(localStorage.getItem('bag')) || [];
    const isInBag = storedBag.some(cartItem => cartItem.id === item.id);
    
    const updatedBag = isInBag
      ? storedBag
      : [...storedBag, { id: item.id, name: item.name, image: item.image[0], category: item.category, price: item.price }];
    
    localStorage.setItem('bag', JSON.stringify(updatedBag));

    Swal.fire({
      title: "Item successfuly added to the bag ",
      icon: "success",
   
    });
  };

  return (
    <>
      <div className="container">
        <div className="row">        
          <div className="viewimagebx col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div className="viewimgbx1">
              <Swiper navigation={true} modules={[Navigation]} loop={true} className="mySwiper">
                {product.image.map((img, index) => (
                  <SwiperSlide className="viewslide" key={index}>
                    <img src={img} alt={`Slide ${index}`} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="viewimgbx2">
              <Swiper watchSlidesProgress={true} slidesPerView={4} className="mySwiper">
                {product.image.map((img, index) => (
                  <SwiperSlide className="smallviewimg" key={index}>
                    <img src={img} alt={`Thumbnail ${index}`} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          <div className="viewdetailbx col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div className="vwdtl">
              <h4>{product.name}</h4>
              <FontAwesomeIcon className="vwheart" 
               onClick={() => toggleWishlist(product)}
               style={{
                 color: wishlist.some(wishItem => wishItem.id === product.id) ? 'red' : 'black',
               }}
              icon={faHeart} />
              <h3><span>₹</span>{product.price}</h3>
              <p>{product.description1}</p>
              <div className="rtng">
                <span>{product.rating}</span>
                <FontAwesomeIcon icon={faStar} />
              </div>
              <div className="revw">
                <span>reviews </span>{product.reviews}
              </div>
              <button className="btn btn-success" onClick={() => toggleCart(product)}>ADD TO CART</button>
              <button className="btn btn-warning">BUY NOW</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Viewitem;

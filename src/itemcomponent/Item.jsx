import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart, faEye  } from '@fortawesome/free-solid-svg-icons';
import '../component css/home.css';
import '../product/product.css';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

function Item() {
  const [groupedProducts, setGroupedProducts] = useState({});
  const [loading, setLoading] = useState(true);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    axios.get('https://66c83807732bf1b79fa89cc1.mockapi.io/api/v1/fruit')
      .then(response => {
        const products = response.data;
        const grouped = products.reduce((acc, product) => {
          const category = product.category || 'Uncategorized';
          if (!acc[category]) {
            acc[category] = [];
          }
          if (acc[category].length < 4) {
            acc[category].push(product);
          }
          return acc;
        }, {});
        setGroupedProducts(grouped);
        setLoading(false);
      });

    const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlist(storedWishlist);
  }, []);

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
    <div className="container page5">
      <div className="row">
        <div className="col-md-12 col-sm-12 col-12 page5h1">
          <h1>Products</h1>
        </div>

        {loading ? (
          <div className="loader"></div>
        ) : (
          Object.keys(groupedProducts).map(category => (
            <div key={category} className="col-md-12 col-sm-12 col-12">
              <div className="row">
                {groupedProducts[category].map(item => (
                  <div className="col-md-3 col-sm-4 col-6 page5bx" key={item.id}>
                   <div className="page5bxproduct">
                      <img src={item.image[0]} alt={item.name} />
                      <div className="likeaddcardbxproduct">
                        <div
                          className="itemaddlikeview"
                          onClick={() => toggleWishlist(item)}
                          style={{ color: wishlist.some(wishItem => wishItem.id === item.id) ? 'red' : 'black' }}
                        >
                          <FontAwesomeIcon icon={faHeart} />
                        </div>
                        <div className="itemaddlikeview" onClick={() => toggleCart(item)}>
                        <FontAwesomeIcon icon={faShoppingCart} />
                        </div>
                        <Link to={`/view/${item.id}`}><div className="itemaddlikeview"><FontAwesomeIcon icon={faEye} /></div></Link> 
                      </div>
                      <h3>{item.name}</h3>
                      <h4>{item.price}$</h4> <h3 style={{fontSize:'small', paddingBottom:"10px", color:"gray"}}><del>{item.oldprice}</del></h3>
                     
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Item;

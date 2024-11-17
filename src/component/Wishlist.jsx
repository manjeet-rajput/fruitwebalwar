import React, { useEffect, useState } from 'react';
import '../component css/wishlist.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faStar } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlist(storedWishlist);
  }, []);

  const removeItem = (itemToRemove) => {
    Swal.fire({
      title: "Are you sure you want to remove this item?",
      showDenyButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedWishlist = wishlist.filter(item => item.id !== itemToRemove.id);
        setWishlist(updatedWishlist);
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
        Swal.fire("Item removed!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Item not removed", "", "info");
      }
    });
  };

  return (
   <>
   
  <div className="container">
    <div className="row">
    <div className="wishh1bx">
        <h1>My Wishlist</h1>
      </div>
      
      {wishlist.length > 0 ? (
          wishlist.map((item, index) => (
    <div key={index} style={{border:'1px solid rgba(128, 128, 128, 0.594)', borderRadius:'2px'}} className="itm col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <div className="itmimgbxquintity">
            <div style={{height:'100%'}} className="itmimg">
            <img style={{width:'100%', height:'100%'}} src={item.image} alt={item.name} className="wishlistItemImage" />
            </div>
            
          </div>
          <div className="itmdetailbx">
            <div className="itmdetailbx1">
              <h5> {item.name} </h5>
              <div style={{width:'70px' , height:'30px',borderRadius:'2px',backgroundColor:'green', padding:'10px', color:'white', fontWeight:'bold'}} className="wishrating">
                <span>{4.3}<span style={{fontSize:'small'}}><FontAwesomeIcon icon={faStar} /></span></span>
              </div>
               <h4><span>₹</span>{item.price}</h4>
               <p><del>{item.oldprice}</del></p>
             

              </div>
            <div style={{position:'relative'}} className="itmdetailbx2">
              
              <button style={{padding:'10px', position:'absolute', top:'0' , right:'0'}} className='btn btn-warning' onClick={() => removeItem(item)}>Remove</button>
            </div>
          </div>
        </div>
        
          ))
        ) : (
          <p>No items in the wishlist.</p>
        )}
    </div>
  </div>
  {/* ..................................................................itm................................... */}
   
   
   
   
   
   </>
  );
};

export default Wishlist;

import React, { useEffect, useState } from 'react';
import '../component css/wishlist.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar  } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import '../component css/bag.css'

const Bag = () => {
  const [bag, setBag] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => quantity > 1 && setQuantity(quantity - 1);


  useEffect(() => {
    const storedBag = JSON.parse(localStorage.getItem('bag')) || [];
    setBag(storedBag);
  }, []);

  const removeItem = (itemToRemove) => {
    Swal.fire({
      title: "Are you sure you want to remove this item?",
      showDenyButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedBag = bag.filter(item => item.id !== itemToRemove.id);
        setBag(updatedBag);
        localStorage.setItem('bag', JSON.stringify(updatedBag));
        Swal.fire("Item removed!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Item not removed", "", "info");
      }
    });
  };

  return (
    <>
    <div className="wishh1bx">
        <h1>My Bag</h1>
      </div>
      <div className="container">
        <div className="row">
        <div className="wishbagbx1 col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">

        {bag.length > 0 ? (
              bag.map((item, index) => (

        <div key={index} className="itm col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <div className="itmimgbxquintity">
            <div className="itmimg">
            <img style={{width:'100%', height:'100%'}} src={item.image} alt={item.name} />
            </div>
            <div className="quintity">
            <div className="quantity-control">
      <button onClick={decreaseQuantity} className="control-button">−</button>
      <span className="quantity-display">{quantity}</span>
      <button onClick={increaseQuantity} className="control-button">+</button>
    </div>

            </div>
          </div>
          <div className="itmdetailbx">
            <div className="itmdetailbx1">
              <h5>{item.name}  </h5>
               <h4><span>₹</span>{item.price}</h4>
               <p>₹<del>64</del></p>
                <div style={{width:'70px' ,float:'left', height:'30px',borderRadius:'2px',backgroundColor:'green', padding:'10px', color:'white', fontWeight:'bold'}} className="wishrating">
                <span>4.2 <span style={{fontSize:'small'}}><FontAwesomeIcon icon={faStar} /></span></span>
              </div>
               <span className='bottomspan'>+ ₹29 Secured Packaging Fee</span>
             

              </div>


            <div className="itmdetailbx2">
              <p style={{fontSize:'small'}}>Delivery in 2 days, Thu | <del>₹40</del> <span style={{color:'green'}}>Free</span>
              </p>
              <button style={{padding:'10px'}} className='btn btn-warning'onClick={() => removeItem(item)}>Remove</button>
            </div>
          </div>     
        </div>
        
        
        
 ))
            ) : (
              <p>No items in your bag.</p>
            )}


        </div>
        <div className="wishbagbx2 col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
        <div className="price-details">
      <h3>PRICE DETAILS</h3>
      <table>
        <tbody>
          <tr>
            <td>Price (3 items)</td>
            <td>₹22,493</td>
          </tr>
          <tr>
            <td>Discount</td>
            <td className="text-green">– ₹11,335</td>
          </tr>
          <tr>
            <td>Buy more & save more</td>
            <td className="text-green">– ₹100</td>
          </tr>
          <tr>
            <td>Coupons for you</td>
            <td className="text-green">– ₹46</td>
          </tr>
          <tr>
            <td>Delivery Charges</td>
            <td className="text-green">
              <s>₹240</s> Free
            </td>
          </tr>
          <tr>
            <td>Secured Packaging Fee</td>
            <td>₹29</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>Total Amount</td>
            <td>₹11,041</td>
          </tr>
          <tr>
            <td colSpan="2" className="text-green">
              You will save ₹11,452 on this order
            </td>
          </tr>
          <td></td>
          <td><button style={{padding:'10px'}} className='btn btn-danger'>PLACE ORDER</button></td>
        </tfoot>
      </table>
    </div>
        </div>
        
        </div>
      </div>

    
    </>

  );
};

export default Bag;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../component css/home.css';
import '../product/product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart, faEye } from '@fortawesome/free-solid-svg-icons';

function Fruit() {
  const [fruit, setFruit] = useState([]); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    axios.get('https://66c83807732bf1b79fa89cc1.mockapi.io/api/v1/fruit')
      .then(response => {
        setFruit(response.data);
        setLoading(false); 
      })
      .catch(err => {
        console.error('Error fetching data', err);
        setLoading(false);
      });
  }, []); 

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="h1divcategory"><h1>Fruits</h1></div>

          {loading ? ( 
            <div className="loader"></div> 
          ) : 
           ( fruit
              .filter(item => item.category === 'Fruits')
              .map((item) => ( 
                <div key={item.id} className="col-6 col-sm-4 col-md-3 page5bx"> 
                  <div className="page5bxproduct">
                    <img src={item.image[0]} alt={item.name} /> 
                    <div className="likeaddcardbxproduct">
                      <div className="itemaddlikeview"><FontAwesomeIcon icon={faHeart} /></div>
                      <div className="itemaddlikeview"><FontAwesomeIcon icon={faShoppingCart} /></div>
                      <div className="itemaddlikeview"><FontAwesomeIcon icon={faEye} /></div>
                    </div>
                    <h3>{item.name}</h3>
                    <h4>{item.price}$</h4>
                  </div>
                </div>
              ))
          )}
        </div>
      </div>
    </>
  );
}

export default Fruit

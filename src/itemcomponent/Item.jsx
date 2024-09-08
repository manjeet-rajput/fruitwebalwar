import React, { useState, useEffect } from 'react';
import '../component css/home.css';
import axios from 'axios';

function Item() {
  const [groupedProducts, setGroupedProducts] = useState({});
  const [loading, setLoading] = useState(true); // Loading state to show/hide the loader

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
        setLoading(false); // Loader hidden once data is fetched
      });
  }, []);

  return (
    <div className="container page5">
      <div className="row">
        <div className="col-md-12 col-sm-12 col-12 page5h1">
          <h1>Products</h1>
        </div>

        {loading ? (
          <div className="loader"></div>
        ) : 
          (Object.keys(groupedProducts).map(category => (
            <div key={category} className="col-md-12 col-sm-12 col-12">
              <div className="row">
                {groupedProducts[category].map(item => (
                  <div className="col-md-3 col-sm-4 col-6 page5bx" key={item.id}>
                    <div className="page5bxproduct">
                      <img src={item.image[0]} alt={item.name} />
                      <h3>{item.name}</h3>
                      <h4>{item.price}$</h4>
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

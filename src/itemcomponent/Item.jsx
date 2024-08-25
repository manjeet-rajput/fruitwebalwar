import React, { useState, useEffect } from 'react';
import '../component css/home.css';

function Item() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.escuelajs.co/api/v1/products');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }
  return (
    <div className="container page5">
      <div className="row">
        {data.map(item => (
          <div className="col-md-3 col-sm-4 col-6 page5bx" key={item.id}>
            <div className="pg5itmbx">
              <img className='itemimgpag5' src={item.images[0]} alt={item.title} />
              <p>{item.title}</p>
              <h4>{item.price} $</h4>
              <button>More Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Item;

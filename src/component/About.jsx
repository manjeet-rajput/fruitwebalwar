import React from 'react'
import '../component css/about.css'
import '../component css/contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarkerAlt, faEnvelope, faCar ,faGreaterThan} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function About() {
  return (
    <>
       <div className="page1">
   <div className="page1hd">
        <div className="container">
          <div className="row">
          <div className="page1head col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3"> <FontAwesomeIcon className='iconheaad' icon={faPhone} />+0123-456-789</div>
          <div className="page1head col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3"> <FontAwesomeIcon className='iconheaad' icon={faMapMarkerAlt} />PO Box 1622 Bamboo Street West</div>
          <div className="page1head col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3"> <FontAwesomeIcon className='iconheaad' icon={faEnvelope} />example@domain.com</div>
          <div className="page1head col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3"> <FontAwesomeIcon className='iconheaad' icon={faCar} />Free shipping for order above $200.00</div>
          </div>
        </div>
      </div>

<div className="contactpag col-12 col-sm-12 col-lg-12 col-xl-12">
 <div className="ab">
 <h2>About Us</h2>
 <p><Link to='/'>home <FontAwesomeIcon className='abicon' icon={faGreaterThan} /> </Link>about us</p>
 </div>
</div>
   </div>



   <div className="aboutpg2">
      <div className="about2bx1 col-12">
        <div className="about2bximg">
          <img src={require('../component/img/About-Us.webp')} alt="About Us" />
        
        </div>
        <p style={{fontWeight:'bold' , fontSize:'small', paddingTop:"20px", paddingBottom:"50px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consequat ut ex vel finibus. Nunc eget molestie purus. Fusce imperdiet pulvinar est, eget fermentum nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae</p>
      <p style={{fontSize:'small'}}>Maecenas congue metus id turpis iaculis mattis. Sed pellentesque id arcu id scelerisque. Ut ullamcorper rutrum justo, at blandit eros maximus ut. Integer non tincidunt justo, rhoncus Aenean venenatis sed purus ac sollicitudin. Nulla mauris risus, commodo et luctus rutrum, lobortis sed mauris. Integer congue, sem elementum varius tristique, erat nulla rutrum risus, a imperdiet nulla lorem fermentum erat. Pellentesque elementum justo at velit fringilla, eu feugiat erat fermentum. Vivamus libero dolor, porta eget vehicula eu, iaculis id lacus. Sed interdum convallis sapien, eget faucibus sapien. Proin hendrerit lacus turpis.
      </p>
      <p style={{fontSize:'small'}}>Maecenas congue metus id turpis iaculis mattis. Sed pellentesque id arcu id scelerisque. Ut ullamcorper rutrum justo, at blandit eros maximus ut. Integer non tincidunt justo, rhoncus Aenean venenatis sed purus ac sollicitudin. Nulla mauris risus, commodo et luctus rutrum, lobortis sed mauris.

</p>
      
      </div>
   

    </div>
    <div className="aboutpage3">
    <div className="container">
        <div className="row">
          <div className="about2bx211 col-12 col-sm-12 col-lg-6 col-md- col-xl-6">
            <h2 style={{fontWeight:'bold' , paddingTop:"20px"}}>Why choose us ?</h2><br />
            <p style={{paddingTop:'20px', fontSize:'small'}}>Maecenas congue metus id turpis iaculis mattis. Sed pellentesque id arcu id scelerisque. Ut ullamcorper rutrum justo, at blandit eros maximus ut. Integer non tincidunt justo, rhoncus Aenean venenatis sed purus ac sollicitudin. Nulla mauris risus, commodo et luctus rutrum, lobortis sed mauris. Integer congue, sem elementum varius tristique.
            </p>
          </div>
          <div className="about2bx2 col-12 col-sm-12 col-lg-6 col-md- col-xl-6">
            <img src={require('../component/img/swipe-for-shopping.gif')} alt="" />
          </div>
        </div>
      </div>
    </div>


    <div className="aboutpage4">
    <div className="container">
        <div className="row">
        
          <div style={{height:"300px", paddingBottom:'20px'}} className="about2bx2 col-12 col-sm-12 col-lg-6 col-md- col-xl-6">
            <img src={require('../component/img/shopping-cart-loader.gif')} alt="" />
          </div>
          <div className="about2bx211 col-12 col-sm-12 col-lg-6 col-md- col-xl-6">
            <h2 style={{fontWeight:'bold' , paddingTop:"20px"}}>Trusted online shopping            </h2><br />
            <p style={{paddingTop:'20px', fontSize:'small'}}>Maecenas congue metus id turpis iaculis mattis. Sed pellentesque id arcu id scelerisque. Ut ullamcorper rutrum justo, at blandit eros maximus ut. Integer non tincidunt justo, rhoncus Aenean venenatis sed purus ac sollicitudin. Nulla mauris risus, commodo et luctus rutrum, lobortis sed mauris. Integer congue, sem elementum varius tristique.
            </p>
          </div>
        </div>
      </div>
    </div>


    </>
  )
}

export default About

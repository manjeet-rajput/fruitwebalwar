import React from 'react'
import '../component css/contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarkerAlt, faEnvelope, faCar ,faGreaterThan,faCodeBranch} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';





function Contact() {
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
 <h2>Contact Us</h2>
 <p><Link to='/'>home <FontAwesomeIcon className='abicon' icon={faGreaterThan} /> </Link>contact us</p>
 </div>
</div>





   </div>
   

    <div className="page2">
      <div className="container">
        <div className="row">
          <div className="mappag2 col-12 col-sm-12 col-lg-12 col-xl-12">


{/* Map Container at Top Right */}
<div className="map-container">
  <div className="map">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2384.2704996597435!2d77.01212561584878!3d28.589704109598054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3c4c977f009%3A0x206fd9e0a96007c7!2sMy%20Location!5e0!3m2!1sen!2sin!4v1631294178304!5m2!1sen!2sin"
      width="100%"
      height="400"
      style={{ border: '0' }}
      allowfullscreen=""
      loading="lazy"
    ></iframe>
  </div>

  {/* Directions Link */}
  <a
    href="https://maps.app.goo.gl/bRKaicyEc1mB3vFz5"
    target="_blank"
    rel="noopener noreferrer"
    className="directions-link"
  >
  <div className="getdirationmap col-12 col-sm-4col-lg-3 col-xl-3">
    <div className="bx1">
      <h5>lastminute.com London Eye</h5>
      <p>Riverside Building, County Hall, London SE1 7PB, United Kingdom</p>
    </div>
    <div className="bx2"><FontAwesomeIcon className='directionicon' icon={faCodeBranch} />Directions</div>
  
  </div>
  </a>
</div>
          </div>
        </div>
      </div>
    </div>

    <div className="page3">
      <div className="container">
       <div className="page3hed">
       <h4>GET IN TOUCH</h4>
       <p>Please enter the details of your request. A member of our support staff will respond as soon as possible.</p>
       </div>
        <div className="row">
          <div className="formbx col-12 col-sm-12 col-lg-8 c0l-xl-8">
              <input type="text" className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6' placeholder="Your Name"/>
              <input type="text" style={{float:'right'}} className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6' placeholder="Your Email"/>
              <input type="text" className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12' placeholder="Subject"/>
              <input type="text" className='messageinput col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12' placeholder="Message"/>


          </div>
          <div className="addressbx col-12 col-sm-12 col-lg-4 c0l-xl-4">
            <div className="addressbx1">
              <h5 style={{paddingTop:'10px'}}><span style={{fontWeight:'bold'}}>Address:</span> 123 Suspendis matti, Visaosang Building VST District, NY Accums, North American</h5>
            </div>
            <div className="addressbx1">
            <h5><span style={{fontWeight:'bold'}}>Email:</span>Manjeet@gmail.com</h5>
            <h5><span style={{fontWeight:'bold'}}>Call Us:</span>(012)-345-67890</h5>
            </div>
            <div className="addressbx1">
            <h5><span style={{fontWeight:'bold'}}>Opening time:</span>Our store has re-opened for shopping, exchanges every day <span style={{fontWeight:'bold'}}>11am to 7pm</span></h5>
            </div>
            <div className="addressbx1">
            <FontAwesomeIcon className='addressbxicon' icon={faFacebook} />
            <FontAwesomeIcon className='addressbxicon' icon={faInstagram} />
            <FontAwesomeIcon className='addressbxicon' icon={faTwitter} />
            <FontAwesomeIcon className='addressbxicon' icon={faYoutube} />
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default Contact

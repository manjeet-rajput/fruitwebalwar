import React from 'react'
import '../component css/home.css'
import 'animate.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination ,Autoplay , Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Item from '../itemcomponent/Item';




function Home() {
  return (
    <>
    <div className='section1'>
    <Swiper
       spaceBetween={30}
       centeredSlides={true}
       autoplay={{
         delay: 6500,
         disableOnInteraction: false,
       }}
       pagination={{
         clickable: true,
       }}
       navigation={true}
       modules={[Autoplay, Pagination, Navigation]}
       className="mySwiper"
     >
       <SwiperSlide>
         <div className="section1slide1">
             <img className='hove_img1 col-md-6 col-sm-6 col-xs-12' src={require('../component/img/leaves.png')} alt=''/>        
         <div className="container">
           <div className="row">
             <div className="col-md-6 col-sm-6 col-xs-12 section1slide_details">
             <div className="section1_deatils">
               
             <h6>CHEF'S SPECIAL</h6>
             <h1>freshness <br/> in every bite</h1>
             <p>
             Good slogens for food delivery business are the key to attractive the more customers and earn money and especially food.</p>
             <button type='button' className=' btn slider_button'>EXPLORE NOW -</button>
             </div>
             <img className='hove_img3' src={require('../component/img/vegetables (2).png')} alt="" />
             </div>
             <div className="col-md-6 col-sm-6 col-xs-12 section1slide_img" >
               <img className='hove_img2' src={require('../component/img/lettuce2.png')} alt="" />
              <div className="section1_img">
              <img className='section1slide_imgs' src={require('../component/img/slide2-1.png')} alt="" />
            
              </div>
             </div>
           </div>
           </div>
         </div>
         </SwiperSlide>





       <SwiperSlide>
         <div className="section1slide2">
                   
         <div className="container">
           <div className="row">
             <div className="col-md-6 col-sm-6 col-xs-12 section1slide_details">
             <div className="section1_deatils">
               
             <h6>  DRINK WITH US</h6>
             <h1>Organic Row<br/> Fruit Smoothies</h1>
             <img className='hove_img1_1 col-md-6 col-sm-6 col-xs-12' src={require('../component/img/leaves2.png')} alt=''/> 
             <p>
             Choice of Tropical Delight, Creamy Strawberry, Pineapple Island, Blueberry Bliss, Organic Green Kale, Mango, Banana Mango	</p>
             <button type='button' className=' btn slider_button'>EXPLORE NOW -</button>
             </div>
             <img className='hove_img3_2' src={require('../component/img/Strawberry.png')} alt="" />
             </div>
             <div className="col-md-6 col-sm-6 col-xs-12 section1slide_img" >
            
              <div className="section1_img">
              <img className='section1slide_imgs' src={require('../component/img/Smoothie.png')} alt="" />
              <img className='hove_img2_3' src={require('../component/img/orange-1.png')} alt="" />
            
              </div>
             </div>
           </div>
           </div>
         </div>



         </SwiperSlide>


       <SwiperSlide><div className="section1slide3">
       <div className="container">
           <div className="row">
             <div className="col-md-6 col-sm-6 col-xs-12 section1slide_details">
               
             <div className="section1_deatils">
             <img className='hove_img1_1_1' src={require('../component/img/orange2.png')} alt="" />
             {/* <h6>CHEF'S SPECIAL</h6> */}
             <h1>Vitenamese <br/> Sandwich</h1>
           
             <p>
            
             Vietnamese sandwich is made with meat, pate, fried egg and full of pickled vegetables. One of the most vibrant and delicious sandwiches in the world</p>
             <button type='button' className=' btn slider_button'>EXPLORE NOW -</button>
             </div>
             </div>
             <div className="col-md-6 col-sm-6 col-xs-12 section1slide_img" >
              <div className="section1_img">
              <img className='section1slide_imgs' style={{width:'100%', height:'100%'}} src={require('../component/img/bread.png')} alt="" />
              <img className='hove_img2_3_2' src={require('../component/img/icon-slide.png')} alt="" />
              <img className='hove_img3_2_2' src={require('../component/img/chili-sauce.png')} alt="" />
              </div>
             </div>
           </div>
           </div>
       </div>
       </SwiperSlide>
     </Swiper>
    </div>
    {/* .........................................page 2 ................................. */}
    <div className="page2">
 <div className="container">
   <div className="row page2_row">
     <div className="col-md-6 col-sm-6 col-xs-12 page2_img">
       <div className="page">
         <img src={require('../component/img/healthy-food.png')} alt="Healthy Food" />
       </div>
     </div>
     <div className="col-md-6 col-sm-6 col-xs-12 page2_details">
       <h4>Why Choose Us</h4>
       <h2>Healthy Food is The Key to Your <br /> Good Mood</h2>
       <div className="page2smallimg_details">
         <div className="page2smallimg_detailsimg">
           <div className="page2imggggggg">
             <img src={require('../component/img/icon-2.png')} alt="Fresh Food Icon" />
           </div>
         </div>
         <div className="page2smallimg_detailsimgdet">
           <div className="img_detailaa">
             <h4>100% Fresh Food</h4>
             <p>		Botanica Shop is always committed to 100% fresh, organic <br />
             food has a certificate of food safety certification
             </p>
           </div>
         </div>
       </div>
       <div className="page2smallimg_details">
         <div className="page2smallimg_detailsimg">
           <div className="page2imggggggg">
             <img src={require('../component/img/icon-3.png')} alt="Fresh Food Icon" />
           </div>
         </div>
         <div className="page2smallimg_detailsimgdet">
           <div className="img_detailaa">
             <h4>Premium quality food products</h4>
             <p>	Organic farming, agricultural system that uses ecologically<br />                      
               based pest controls and biological fertilizers derived
             </p>
           </div>
         </div>
       </div>
       <div className="page2smallimg_details">
         <div className="page2smallimg_detailsimg">
           <div className="page2imggggggg">
             <img src={require('../component/img/icon-4.png')} alt="Fresh Food Icon" />
           </div>
         </div>
         <div className="page2smallimg_detailsimgdet">
           <div className="img_detailaa">
             <h4>Premium quality food products</h4>
             <p>		Botanica Shop is always committed to 100% fresh, organic <br />
             food has a certificate of food safety certification
             </p>
           </div>
         </div>
       </div>
     </div>
   </div>
 </div>
</div>  
{/* ...............................................pag3 .......................................... */}
<div className="container"><div className="row page3">
 <div className="col-md-12">
   <div className="page3menu">
     <h3>Our Menu</h3>
   </div>
 </div>
 <div className="col-md-12 page3menuslide">
   <Swiper
     watchSlidesProgress={true}
     slidesPerView={4}
     loop={true}
     className="mySwiper"
     breakpoints={{
       230: {
         slidesPerView: 1,
       },
       500: {
         slidesPerView: 2,
       },
       768: {
         slidesPerView: 2,
       },
       1024: {
         slidesPerView: 3,
       },
       1200: {
         slidesPerView: 4,
       },
     }}
   >
     <SwiperSlide className="page3slid">
       <div className="page3slid_box">
         <div className="page3slid_bximg">
         <img src={require('../component/img/Burger.png')} alt="Burger" className="img-fluid" />
         </div>
         <div className="page3slid_bxdetail">
           <h6>Fresh Fruit</h6>
           <p>More than 40 different types of fruit.</p>
         </div>
         <div className="buttonpg3-container">
           <div className="buttonpg3">
             <FontAwesomeIcon icon={faTwitter} />
           </div>
         </div>
       </div>
     </SwiperSlide>
     <SwiperSlide className="page3slid">
       <div className="page3slid_box">
         <div className="page3slid_bximg">
         <img src={require('../component/img/salmon.png')} alt="Burger" className="img-fluid" />
         </div>
         <div className="page3slid_bxdetail">
           <h6>Salmon</h6>
           <p>Get the freshest salmon and ocean trout</p>
         </div>
         <div className="buttonpg3-container">
           <div className="buttonpg3">
             <FontAwesomeIcon icon={faTwitter} />
           </div>
         </div>
       </div>
     </SwiperSlide>
     <SwiperSlide className="page3slid">
       <div className="page3slid_box">
         <div className="page3slid_bximg">
         <img src={require('../component/img/beef.png')} alt="Burger" className="img-fluid" />
         </div>
         <div className="page3slid_bxdetail">
           <h6>Beef</h6>
           <p>Get the freshest salmon and ocean trout</p>
         </div>
         <div className="buttonpg3-container">
           <div className="buttonpg3">
             <FontAwesomeIcon icon={faTwitter} />
           </div>
         </div>
       </div>
     </SwiperSlide>
     <SwiperSlide className="page3slid">
       <div className="page3slid_box">
         <div className="page3slid_bximg">
         <img src={require('../component/img/vegetable.png')} alt="Burger" className="img-fluid" />
         </div>
         <div className="page3slid_bxdetail">
           <h6>Vegetables</h6>
           <p>More than 40 different types of fruit.</p>
         </div>
         <div className="buttonpg3-container">
           <div className="buttonpg3">
             <FontAwesomeIcon icon={faTwitter} />
           </div>
         </div>
       </div>
     </SwiperSlide>
     <SwiperSlide className="page3slid">
       <div className="page3slid_box">
         <div className="page3slid_bximg">
         <img src={require('../component/img/salmon.png')} alt="Burger" className="img-fluid" />
         </div>
         <div className="page3slid_bxdetail">
           <h6>Salmon</h6>
           <p>Get the freshest salmon and ocean trout</p>
         </div>
         <div className="buttonpg3-container">
           <div className="buttonpg3">
             <FontAwesomeIcon icon={faTwitter} />
           </div>
         </div>
       </div>
     </SwiperSlide>
     <SwiperSlide className="page3slid">
       <div className="page3slid_box">
         <div className="page3slid_bximg">
         <img src={require('../component/img/beef.png')} alt="Burger" className="img-fluid" />
         </div>
         <div className="page3slid_bxdetail">
           <h6>Beef</h6>
           <p>Get the freshest salmon and ocean trout</p>
         </div>
         <div className="buttonpg3-container">
           <div className="buttonpg3">
             <FontAwesomeIcon icon={faTwitter} />
           </div>
         </div>
       </div>
     </SwiperSlide>
     <SwiperSlide className="page3slid">
       <div className="page3slid_box">
         <div className="page3slid_bximg">
         <img src={require('../component/img/drink.png')} alt="Burger" className="img-fluid" />
         </div>
         <div className="page3slid_bxdetail">
           <h6>Drink</h6>
           <p>Fruit juices and carbonated soft drinks</p>
         </div>
         <div className="buttonpg3-container">
           <div className="buttonpg3">
             <FontAwesomeIcon icon={faTwitter} />
           </div>
         </div>
       </div>
     </SwiperSlide>    
   </Swiper>
 </div>
</div></div>
{/* ................................................page 4 ........................................ */}
<div className="container page4">
 <div className="row">
   <div className="col-md-6 col-sm-12">
     <div className="page4bx1details1">
       <div className="row">
         <div className="col-md-6 col-sm-12 page4card_detail">
           <div className="page4card_detail1">
             <h6>NATURAL FRESH</h6>
             <h5>Farm Fresh Dairy <br /> Products</h5>
             <button>Shop Now</button>
           </div>
         </div>
         <div className="col-md-6 col-sm-12 page4card_img">
           <img src={require('../component/img/bn2-1.png')} alt="Product" />
         </div>
       </div>
     </div>
   </div>
   <div className="col-md-6 col-sm-12">
     <div className="page4bx1details2">
       <p style={{width:'75%'}}>Sign up for our newsletter to receive special offers and exclusive <br /> news about Botanica products</p>
       <div className="inputpage4">
         <input type="email" placeholder="Enter your email address" />
         <button> <FontAwesomeIcon icon={faEnvelope} />
         </button>
       </div>
     </div>
   </div>
 </div>
</div>
{/* .......................................page 5............................................... */}
<Item/>


    </>
  )
}

export default Home
import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';


function Header() {
  return (
    <div>
          <header>
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <Link className="navbar-brand" to='/'>
              <div className='col-md-4 logoheadermain'><img src={require('../src/component/img/light.png')} alt=''/></div></Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                {/* <span className="navbar-toggler-icon"></span> */}
                <img className='toogle_iconhead' src={require('../src/component/img/tooglebar.png')} alt='togle-button'></img>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                    <div className='nav_buttonlune'></div>
                  </li>
                  
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to='/product'>Product</Link>
                    <div className='col-6 col-md-5 col-sm-5 nav_buttonlune'></div>
                    <div  className='navproductlist'>
                    <div className="categorynavbx">
                     <Link to="/vegetable"><img src={require('../src/component/img/vegetable.png')} alt="" />
                      <h6>Vegitarible</h6></Link>
                    </div>
                      <div className="categorynavbx">
                        <Link to="/Fruits"><img src={require('../src/component/img/apple.png')} alt="" />
                        <h6>Fruit</h6></Link>
                      </div>
                      <div className="categorynavbx">
                      <Link to="/drink"><img src={require('../src/component/img/Soft-drink.png')} alt="" />
                      <h6>Drink</h6></Link>
                      </div>
                      <div className="categorynavbx">
                      <Link to="/meat"><img src={require('../src/component/img/Chiken.png')} alt="" />
                      <h6>Chiken</h6></Link>
                      </div>
                    </div>

                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to='/contact'>Contact</Link>
                    <div className='nav_buttonlune'></div>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to='/about'>About</Link>
                    <div className='nav_buttonlune'></div>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to='/blog'>Blog</Link>  
                    <div className='nav_buttonlune'></div>
                  </li>
                </ul>
                <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-outline-success"  class="glow-on-hover"  type="submit">Search</button>
                </form>
              </div>
              <div className='like_card_profile'>
                 <Link to='/wishlist'><FontAwesomeIcon className='iconlefthsf' icon={faHeart}/></Link>
                 <Link to='/bag'><FontAwesomeIcon className='iconlefthsf'icon={faShoppingCart}/></Link>
                 <Link to='/profile'><FontAwesomeIcon className='iconlefthsf' icon={faUser}/></Link>
                </div>
            </div>
          </nav>
        </header>
    </div>
  )
}

export default Header
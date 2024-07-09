function UserNavbar() {

    return (
    
    <>

        <header className="main-header">
      
        <div className="header-inner  fl-wrap">
          <div className="container">
            <div className="header-container fl-wrap">
              <a href="index.html" className="logo-holder">
                <img src="images/logo.png" alt="" />
              </a>
              <div className="show-reserv_button show-rb">
                <span>Reservation</span> <i className="fal fa-bookmark" />
              </div>
              <div className="show-share-btn showshare htact">
                <i className="fal fa-bullhorn" />{" "}
                <span className="header-tooltip">Share</span>
              </div>
              <div className="show-cart sc_btn htact">
                <i className="fal fa-shopping-bag" />
                <span className="show-cart_count">3</span>
                <span className="header-tooltip">Your Cart</span>
              </div>
              {/* nav-button-wrap*/}
              <div className="nav-button-wrap">
                <div className="nav-button">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
              {/* nav-button-wrap end*/}
              {/*  navigation */}
              <div className="nav-holder main-menu">
                <nav>
                  <ul>
                    <li>
                      <a href="/userhome" className="act-link">
                        Home 
                      </a>
                      {/*second level */}
                      
                      {/*second level end*/}
                    </li>
                    <li>
                      <a href="/userviewmenu">
                        Menu
                        
                      </a>
                   
                    </li>
                    <li>
                      <a href="about.html">About</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                    <li>
                      <a href="blog.html">News</a>
                    </li>
                    <li>
                      <a href="#">
                        Pages
                        <i className="fas fa-caret-down" />
                      </a>
                      {/*second level */}
                      <ul>
                        <li>
                          <a href="shop.html">Shop</a>
                        </li>
                        <li>
                          <a href="product-single.html">Product Single</a>
                        </li>
                        <li>
                          <a href="cart.html">Cart</a>
                        </li>
                        <li>
                          <a href="gallery.html">Gallery</a>
                        </li>
                        <li>
                          <a href="blog-single.html">Blog single</a>
                        </li>
                        <li>
                          <a href="404.html">404</a>
                        </li>
                        <li>
                          <a href="coming-soon.html">Coming Soon</a>
                        </li>
                      </ul>
                      {/*second level end*/}
                    </li>
                  </ul>
                </nav>
              </div>
              {/* navigation  end */}
              {/* header-cart_wrap  */}
              <div className="header-cart_wrap novis_cart">
                <div className="header-cart_title">
                  Your Cart <span>4 items</span>
                </div>
                <div className="header-cart_wrap_container fl-wrap">
                  <div className="box-widget-content">
                    <div className="widget-posts fl-wrap">
                      <ol>
                        <li className="clearfix">
                          <a href="#" className="widget-posts-img">
                            <img src="images/menu/1.jpg" className="respimg" alt="" />
                          </a>
                          <div className="widget-posts-descr">
                            <a href="#" title="">
                              Grilled Steaks
                            </a>
                            <div className="widget-posts-descr_calc clearfix">
                              1 <span>x</span> $45
                            </div>
                          </div>
                          <div className="clear-cart_button">
                            <i className="fal fa-times" />
                          </div>
                        </li>
                        <li className="clearfix">
                          <a href="#" className="widget-posts-img">
                            <img src="images/menu/2.jpg" className="respimg" alt="" />
                          </a>
                          <div className="widget-posts-descr">
                            <a href="#" title="">
                              Cripsy Lobster &amp; Shrimp Bites
                            </a>
                            <div className="widget-posts-descr_calc clearfix">
                              2 <span>x</span> $22
                            </div>
                          </div>
                          <div className="clear-cart_button">
                            <i className="fal fa-times" />
                          </div>
                        </li>
                        <li className="clearfix">
                          <a href="#" className="widget-posts-img">
                            <img src="images/menu/3.jpg" className="respimg" alt="" />
                          </a>
                          <div className="widget-posts-descr">
                            <a href="#" title="">
                              Chicken tortilla soup
                            </a>
                            <div className="widget-posts-descr_calc clearfix">
                              1 <span>x</span> $37
                            </div>
                          </div>
                          <div className="clear-cart_button">
                            <i className="fal fa-times" />
                          </div>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
                <div className="header-cart_wrap_total fl-wrap">
                  <div className="header-cart_wrap_total_item">
                    Subtotal : <span>$147</span>
                  </div>
                </div>
                <div className="header-cart_wrap_footer fl-wrap">
                  <a href="cart.html"> View Cart</a>
                  <a href="checkout.html"> Checkout</a>
                </div>
              </div>
              {/* header-cart_wrap end  */}
              {/* share-wrapper */}
              <div className="share-wrapper isShare">
                <div className="share-container fl-wrap" />
              </div>
              {/* share-wrapper-end */}
            </div>
          </div>
        </div>
        {/* header-inner end  */}
      </header>
      
     </> 
    )
    
}
export default UserNavbar;
function AdminNavbar () {

    return(
        <>
        <div className="header-inner  fl-wrap">
        <div className="container">
          <div className="header-container fl-wrap">
            <a href="index.html" className="logo-holder">
              <img src="images/logo.png" alt="" />
            </a>
            <div className="show-reserv_button show-rb">
              <span>LogOut</span> <i className="fal fa-bookmark" />
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
                    <a href="#" className="act-link">
                      Dashboard <i className="fas fa-caret-down" />
                    </a>
                    {/*second level end*/}
                  </li>
                  <li>
                    <a href="#">
                      Menu
                      <i className="fas fa-caret-down" />
                    </a>
                    {/*second level */}
                   
                    {/*second level end*/}
                  </li>
                  <li>
                    <a href="about.html">Orders</a>
                  </li>
                  <li>
                    <a href="contact.html">Reservations</a>
                  </li>
                  <li>
                    <a href="blog.html">FeedBacks</a>
                  </li>
                  <li>
                    <a href="#">
                    Users
                      <i className="fas fa-caret-down" />
                    </a>
                    {/*second level */}
                    <ul>
                      <li>
                        <a href="/usersviewdetail">View Users</a>
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
              
              <div className="header-cart_wrap_container fl-wrap">
                <div className="box-widget-content">
                  <div className="widget-posts fl-wrap">
                   
                  </div>
                </div>
              </div>
              <div className="header-cart_wrap_total fl-wrap">
                <div className="header-cart_wrap_total_item">
                  Subtotal : <span>$147</span>
                </div>
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
        </>
    )
}
export default AdminNavbar;
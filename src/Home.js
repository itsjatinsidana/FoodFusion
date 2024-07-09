

export const Home = () => {

  return (
    <>
      <>
        {/* lodaer  */}
        <div className="loader-wrap">
          <div className="loader-item">
            <div className="cd-loader-layer" data-frame={25}>
              <div className="loader-layer" />
            </div>
            <span className="loader" />
          </div>
        </div>
        {/* loader end  */}
        {/* main start  */}
        <div id="main">
          {/* header  */}
          <header className="main-header">
            {/* header-top  */}
            <div className="header-top">
              <div className="container">
                <div className="lang-wrap">
                  <a href="#" className="act-lang">
                    En
                  </a>
                  <span>/</span>
                  <a href="#">Fr</a>
                </div>
                <div className="header-top_contacts">
                  <a href="#">
                    <span>Call now:</span> +489756412322
                  </a>
                  <a href="#">
                    <span>Write :</span> yourmail@domain.com
                  </a>
                </div>
              </div>
            </div>
            {/*header-top end */}
            {/* header-inner */}
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
                          <a href="#" className="act-link">
                            Home <i className="fas fa-caret-down" />
                          </a>
                          {/*second level */}
                          <ul>
                            <li>
                              <a href="index.html">Parallax Image</a>
                            </li>
                            <li>
                              <a href="index2.html">Slider</a>
                            </li>
                            <li>
                              <a href="index3.html">Carousel</a>
                            </li>
                            <li>
                              <a href="index4.html">Slideshow</a>
                            </li>
                            <li>
                              <a href="index5.html">Video</a>
                            </li>
                            <li>
                              <a href="onepage.html">One Page</a>
                            </li>
                          </ul>
                          {/*second level end*/}
                        </li>
                        <li>
                          <a href="#">
                            Menu
                            <i className="fas fa-caret-down" />
                          </a>
                          {/*second level */}
                          <ul>
                            <li>
                              <a href="menu.html">Menu 1</a>
                            </li>
                            <li>
                              <a href="menu2.html">Menu 2</a>
                            </li>
                            <li>
                              <a href="menu3.html">Menu 3</a>
                            </li>
                          </ul>
                          {/*second level end*/}
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
                                <img
                                  src="images/menu/1.jpg"
                                  className="respimg"
                                  alt=""
                                />
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
                                <img
                                  src="images/menu/2.jpg"
                                  className="respimg"
                                  alt=""
                                />
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
                                <img
                                  src="images/menu/3.jpg"
                                  className="respimg"
                                  alt=""
                                />
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
          {/*header end */}
          {/* wrapper  */}
          <div id="wrapper">
            {/* hero-wrap*/}
            <div
              className="hero-wrap fl-wrap full-height"
              data-scrollax-parent="true"
            >
              <div
                className="bg par-elem "
                data-bg="images/bg/2.jpg"
                data-scrollax="properties: { translateY: '30%' }"
              />
              <div className="overlay" />
              <div className="hero-title-wrap fl-wrap">
                <div className="container">
                  <div className="hero-title">
                    <h4>Top Services and Premium Cuisine </h4>
                    <h2>Welcome to Restabook Restaurant</h2>
                    <a href="menu.html" className="hero_btn">
                      Check out our Menu <i className="fal fa-long-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              {/*hero_promo-wrap*/}
              <div className="hero_promo-wrap bot-element2">
                <div className="hero_promo-button">
                  <a href="https://vimeo.com/10322316" className="image-popup">
                    <i className="fas fa-play" />
                  </a>
                </div>
                <div className="hero_promo-title">
                  <h4>View Promo Video</h4>
                </div>
              </div>
              {/*hero_promo-wrap end*/}
              {/*hero-social*/}
              <div className="hero-social">
                <ul>
                  <li>
                    <a href="#" target="_blank">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="fab fa-vk" />
                    </a>
                  </li>
                </ul>
              </div>
              {/*hero-social end*/}
              {/* hero-bottom-container */}
              <div className="hero-bottom-container">
                <div className="container">
                  <div className="scroll-down-wrap">
                    <div className="mousey">
                      <div className="scroller" />
                    </div>
                    <span>Scroll down to Discover</span>
                  </div>
                  <a href="#sec2" className="sd_btn custom-scroll-link">
                    <i className="fal fa-chevron-double-down" />
                  </a>
                </div>
              </div>
              {/* hero-bottom-container */}
              <div className="hero-dec_top" />
              <div className="hero-dec_bottom" />
              <div className="brush-dec" />
            </div>
            {/* hero-wrap  end */}
            {/* content  */}
            <div className="content">
              <section
                className="hidden-section big-padding"
                data-scrollax-parent="true"
                id="sec2"
              >
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="section-title text-align_left">
                        <h4>Our story</h4>
                        <h2>Few words about us</h2>
                        <div className="dots-separator fl-wrap">
                          <span />
                        </div>
                      </div>
                      <div className="text-block ">
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium totam aperiam.
                          Eaque ipsa quae ab illo inventore veritatis et quasi
                          architecto beatae vitae dicta sunt. Ut enim ad minima
                          veniam, quis nostrum exercitationem ullam corporis suscipit
                          laboriosam, nisi ut aliquid ex ea commodi consequatur.
                        </p>
                        <p>
                          {" "}
                          Quis autem vel eum iure reprehenderit qui in ea voluptate
                          velit esse quam nihil molestiae consequatur.
                        </p>
                        <a href="menu.html" className="btn fl-btn">
                          Explore Our Menu
                          <i className="fal fa-long-arrow-right" />
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="image-collge-wrap fl-wrap">
                        <div className="main-iamge">
                          <img src="images/all/3.jpg" alt="" />
                        </div>
                        <div
                          className="images-collage-item"
                          style={{ width: "65%" }}
                          data-position-left={68}
                          data-position-top={-15}
                          data-zindex={2}
                          data-opacity={1.0}
                        >
                          <img src="images/all/8.jpg" alt="" />
                        </div>
                        <div
                          className="images-collage-item col_par"
                          style={{ width: 120 }}
                          data-position-left={-23}
                          data-position-top={-17}
                          data-zindex={9}
                          data-scrollax="properties: { translateY: '150px' }"
                        >
                          <img src="images/cube.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="section-dec sec-dec_top" />
                  <div
                    className="wave-bg"
                    data-scrollax="properties: { translateY: '-150px' }"
                  />
                </div>
              </section>
              {/*  section end  */}
              {/* section   */}
              <section
                className="column-section no-padding hidden-section"
                data-scrollax-parent="true"
                id="sec4"
              >
                <div className="column-wrap-bg left-wrap">
                  <div
                    className="bg par-elem "
                    data-bg="images/bg/12.jpg"
                    data-scrollax="properties: { translateY: '30%' }"
                  />
                  <div className="overlay" />
                  <div className="quote-box">
                    <i className="fal fa-quote-right" />
                    <p>
                      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                      quae ab illo inventore veritatis et quasi accusantium."
                    </p>
                    <div className="signature">
                      <img src="images/signature.png" alt="" />
                    </div>
                    <h4>Kevin Kowalsky - Restaurant’s cheaf</h4>
                  </div>
                </div>
                <div className="column-section-wrap dark-bg">
                  <div className="container">
                    <div className="column-text">
                      <div className="section-title">
                        <h4>Call For Reservations</h4>
                        <h2>Opening Hours</h2>
                        <div className="dots-separator fl-wrap">
                          <span />
                        </div>
                      </div>
                      <div className="work-time fl-wrap">
                        <div className="row">
                          <div className="col-sm-6">
                            <h3>Sunday to Tuesday</h3>
                            <div className="hours">
                              09:00
                              <br />
                              22:00
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <h3>Friday to Saturday</h3>
                            <div className="hours">
                              11:00
                              <br />
                              19:00
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="clearfix" />
                      <div className="bold-separator">
                        <span />
                      </div>
                      <div className="big-number">
                        <a href="#">+7(111)123456789</a>
                      </div>
                    </div>
                  </div>
                  <div className="illustration_bg">
                    <div className="bg" data-bg="images/bg/dec/7.png" />
                  </div>
                </div>
              </section>
              {/* section end */}
              {/*  section    */}
              <section data-scrollax-parent="true">
                <div className="container">
                  <div className="section-title">
                    <h4>Why people choose us</h4>
                    <h2>Prepare for first-class service</h2>
                    <div className="dots-separator fl-wrap">
                      <span />
                    </div>
                  </div>
                  <div className="cards-wrap fl-wrap">
                    <div className="row">
                      {/*card item */}
                      <div className="col-md-4">
                        <div className="content-inner fl-wrap">
                          <div className="content-front">
                            <div className="cf-inner">
                              <div className="bg " data-bg="images/services/1.jpg" />
                              <div className="overlay" />
                              <div className="inner">
                                <h2>Daily New Fresh Menus</h2>
                                <h4>Start eating better</h4>
                              </div>
                              <div className="serv-num">01.</div>
                            </div>
                          </div>
                          <div className="content-back">
                            <div className="cf-inner">
                              <div className="inner">
                                <div className="dec-icon">
                                  <i className="fal fa-fish" />
                                </div>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                  elit. Maecenas in pulvinar neque. Nulla finibus
                                  lobortis pulvinar.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*card item end */}
                      {/*card item */}
                      <div className="col-md-4">
                        <div className="content-inner fl-wrap">
                          <div className="content-front">
                            <div className="cf-inner">
                              <div className="bg " data-bg="images/services/2.jpg" />
                              <div className="overlay" />
                              <div className="inner">
                                <h2>Fresh Ingredient, Tasty Meals</h2>
                                <h4>Quality is the heart</h4>
                              </div>
                              <div className="serv-num">02.</div>
                            </div>
                          </div>
                          <div className="content-back">
                            <div className="cf-inner">
                              <div className="inner">
                                <div className="dec-icon">
                                  <i className="fal fa-carrot" />
                                </div>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                  elit. Maecenas in pulvinar neque. Nulla finibus
                                  lobortis pulvinar.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*card item end */}
                      {/*card item */}
                      <div className="col-md-4">
                        <div className="content-inner fl-wrap">
                          <div className="content-front">
                            <div className="cf-inner">
                              <div className="bg " data-bg="images/services/3.jpg" />
                              <div className="overlay" />
                              <div className="inner">
                                <h2>Creative &amp; Talented Chefs</h2>
                                <h4>Hot &amp; ready to serve</h4>
                              </div>
                              <div className="serv-num">03.</div>
                            </div>
                          </div>
                          <div className="content-back">
                            <div className="cf-inner">
                              <div className="inner">
                                <div className="dec-icon">
                                  <i className="fal fa-utensils-alt" />
                                </div>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                  elit. Maecenas in pulvinar neque. Nulla finibus
                                  lobortis pulvinar.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*card item end */}
                    </div>
                    <div className="section-dec sec-dec_top" />
                    <div className="section-dec sec-dec_bottom" />
                  </div>
                  <a href="about.html" className="btn fl-btn border-btn">
                    Read More About us <i className="fal fa-long-arrow-right" />
                  </a>
                  <div
                    className="images-collage-item col_par"
                    style={{ width: 120 }}
                    data-position-left={83}
                    data-position-top={87}
                    data-zindex={1}
                    data-scrollax="properties: { translateY: '150px' }"
                  >
                    <img src="images/cube.png" alt="" />
                  </div>
                </div>
                <div className="section-bg">
                  <div className="bg" data-bg="images/bg/dec/section-bg.png" />
                </div>
              </section>
              {/*  section end  */}
              {/*  section  */}
              <section
                className="parallax-section dark-bg hidden-section"
                data-scrollax-parent="true"
              >
                <div className="brush-dec2" />
                <div className="brush-dec" />
                <div
                  className="bg par-elem bg_tabs"
                  data-bg="images/bg/4.jpg"
                  data-scrollax="properties: { translateY: '30%' }"
                />
                <div className="cd-tabs-layer" data-frame={10}>
                  <div className="tabs-layer" />
                </div>
                <div className="overlay op7" />
                <div className="container">
                  <div className="section-title">
                    <h4>Special menu offers.</h4>
                    <h2>Enjoy Restaurants Specialties</h2>
                    <div className="dots-separator fl-wrap">
                      <span />
                    </div>
                  </div>
                  {/*  hero-menu_header  end*/}
                  <div className="hero-menu tabs-act fl-wrap">
                    <div className="row">
                      {/*  hero-menu_header*/}
                      <div className="col-md-3">
                        <div className="hero-menu_header fl-wrap">
                          <ul className="tabs-menu     no-list-style change_bg">
                            <li className="current">
                              <a href="#tab-1" data-bgtab="images/bg/4.jpg">
                                <span>01.</span>Main dishes
                              </a>
                            </li>
                            <li>
                              <a href="#tab-2" data-bgtab="images/bg/6.jpg">
                                <span>02.</span>Starter
                              </a>
                            </li>
                            <li>
                              <a href="#tab-3" data-bgtab="images/bg/7.jpg">
                                <span>03.</span>Desserts
                              </a>
                            </li>
                            <li>
                              <a href="#tab-4" data-bgtab="images/bg/5.jpg">
                                <span>04.</span>Sea Food
                              </a>
                            </li>
                            <li>
                              <a href="#tab-5" data-bgtab="images/bg/9.jpg">
                                <span>05.</span>Drinks
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/*  hero-menu_header  end*/}
                      {/*  hero-menu_content   */}
                      <div className="col-md-9">
                        <div className="hero-menu_content fl-wrap">
                          <div className="tabs-container">
                            <div className="tab">
                              {/*tab */}
                              <div id="tab-1" className="tab-content first-tab">
                                {/* header-menu-item*/}
                                <div className="hero-menu-item">
                                  <div className="hero-menu-item-title fl-wrap">
                                    <h6>
                                      <span>01.</span>Soft shell crab
                                    </h6>
                                    <div className="hmi-dec" />
                                    <span className="hero-menu-item-price">$29</span>
                                  </div>
                                  <div className="hero-menu-item-details">
                                    <p>
                                      Granny help you treat yourself with a different
                                      meal everyday
                                    </p>
                                  </div>
                                </div>
                                {/* header-menu-item end*/}
                                {/* header-menu-item*/}
                                <div className="hero-menu-item">
                                  <div className="hero-menu-item-title fl-wrap">
                                    <h6>
                                      <span>02.</span>Miso chicken
                                    </h6>
                                    <div className="hmi-dec" />
                                    <span className="hero-menu-item-price">$19</span>
                                  </div>
                                  <div className="hero-menu-item-details">
                                    <p>Etiam tempus felis eros, id lobortis turpis</p>
                                  </div>
                                </div>
                                {/* header-menu-item end*/}
                                {/* header-menu-item*/}
                                <div className="hero-menu-item">
                                  <div className="hero-menu-item-title fl-wrap">
                                    <h6>
                                      <span>03.</span>Fish pie
                                    </h6>
                                    <div className="hmi-dec" />
                                    <span className="hero-menu-item-price">$12</span>
                                  </div>
                                  <div className="hero-menu-item-details">
                                    <p>usce tempus tempus maximus volutpat</p>
                                  </div>
                                </div>
                                {/* header-menu-item end*/}
                                {/* header-menu-item*/}
                                <div className="hero-menu-item">
                                  <div className="hero-menu-item-title fl-wrap">
                                    <h6>
                                      <span>04.</span>Salmon riverland
                                    </h6>
                                    <div className="hmi-dec" />
                                    <span className="hero-menu-item-price">$105</span>
                                  </div>
                                  <div className="hero-menu-item-details">
                                    <p>
                                      Fusce a tellus tellus. Praesent neque arcu,
                                      efficitur sit amet
                                    </p>
                                  </div>
                                </div>
                                {/* header-menu-item end*/}
                              </div>
                              {/*tab end */}
                              {/*tab 2*/}
                              <div className="tab">
                                <div id="tab-2" className="tab-content">
                                  {/* header-menu-item*/}
                                  <div className="hero-menu-item">
                                    <div className="hero-menu-item-title fl-wrap">
                                      <h6>
                                        <span>01.</span>Fried Potatoes
                                      </h6>
                                      <div className="hmi-dec" />
                                      <span className="hero-menu-item-price">
                                        $29
                                      </span>
                                    </div>
                                    <div className="hero-menu-item-details">
                                      <p>
                                        Granny help you treat yourself with a
                                        different meal everyday
                                      </p>
                                    </div>
                                  </div>
                                  {/* header-menu-item end*/}
                                  {/* header-menu-item*/}
                                  <div className="hero-menu-item">
                                    <div className="hero-menu-item-title fl-wrap">
                                      <h6>
                                        <span>02.</span>Doner Burger
                                      </h6>
                                      <div className="hmi-dec" />
                                      <span className="hero-menu-item-price">
                                        $19
                                      </span>
                                    </div>
                                    <div className="hero-menu-item-details">
                                      <p>
                                        Etiam tempus felis eros, id lobortis turpis
                                      </p>
                                    </div>
                                  </div>
                                  {/* header-menu-item end*/}
                                  {/* header-menu-item*/}
                                  <div className="hero-menu-item">
                                    <div className="hero-menu-item-title fl-wrap">
                                      <h6>
                                        <span>03.</span>Steak Filet
                                      </h6>
                                      <div className="hmi-dec" />
                                      <span className="hero-menu-item-price">
                                        $12
                                      </span>
                                    </div>
                                    <div className="hero-menu-item-details">
                                      <p>usce tempus tempus maximus volutpat</p>
                                    </div>
                                  </div>
                                  {/* header-menu-item end*/}
                                  {/* header-menu-item*/}
                                  <div className="hero-menu-item">
                                    <div className="hero-menu-item-title fl-wrap">
                                      <h6>
                                        <span>04.</span>Cayenne Shrimp
                                      </h6>
                                      <div className="hmi-dec" />
                                      <span className="hero-menu-item-price">
                                        $37
                                      </span>
                                    </div>
                                    <div className="hero-menu-item-details">
                                      <p>usce tempus tempus maximus volutpat</p>
                                    </div>
                                  </div>
                                  {/* header-menu-item end*/}
                                </div>
                              </div>
                              {/*tab end */}
                              {/*tab 3*/}
                              <div className="tab">
                                <div id="tab-3" className="tab-content">
                                  {/* header-menu-item*/}
                                  <div className="hero-menu-item">
                                    <div className="hero-menu-item-title fl-wrap">
                                      <h6>
                                        <span>01.</span>Soft shell crab
                                      </h6>
                                      <div className="hmi-dec" />
                                      <span className="hero-menu-item-price">
                                        $29
                                      </span>
                                    </div>
                                    <div className="hero-menu-item-details">
                                      <p>
                                        Granny help you treat yourself with a
                                        different meal everyday
                                      </p>
                                    </div>
                                  </div>
                                  {/* header-menu-item end*/}
                                  {/* header-menu-item*/}
                                  <div className="hero-menu-item">
                                    <div className="hero-menu-item-title fl-wrap">
                                      <h6>
                                        <span>02.</span>Tarte Tatin
                                      </h6>
                                      <div className="hmi-dec" />
                                      <span className="hero-menu-item-price">
                                        $25
                                      </span>
                                    </div>
                                    <div className="hero-menu-item-details">
                                      <p>
                                        Etiam tempus felis eros, id lobortis turpis
                                      </p>
                                    </div>
                                  </div>
                                  {/* header-menu-item end*/}
                                  {/* header-menu-item*/}
                                  <div className="hero-menu-item">
                                    <div className="hero-menu-item-title fl-wrap">
                                      <h6>
                                        <span>03.</span>Creme Brulee
                                      </h6>
                                      <div className="hmi-dec" />
                                      <span className="hero-menu-item-price">
                                        $64
                                      </span>
                                    </div>
                                    <div className="hero-menu-item-details">
                                      <p>usce tempus tempus maximus volutpat</p>
                                    </div>
                                  </div>
                                  {/* header-menu-item end*/}
                                  {/* header-menu-item*/}
                                  <div className="hero-menu-item">
                                    <div className="hero-menu-item-title fl-wrap">
                                      <h6>
                                        <span>04.</span>Lemon Meringue
                                      </h6>
                                      <div className="hmi-dec" />
                                      <span className="hero-menu-item-price">
                                        $12
                                      </span>
                                    </div>
                                    <div className="hero-menu-item-details">
                                      <p>usce tempus tempus maximus volutpat</p>
                                    </div>
                                  </div>
                                  {/* header-menu-item end*/}
                                </div>
                              </div>
                              {/*tab end */}
                              {/*tab 4*/}
                              <div className="tab">
                                <div id="tab-4" className="tab-content">
                                  {/* header-menu-item*/}
                                  <div className="hero-menu-item">
                                    <div className="hero-menu-item-title fl-wrap">
                                      <h6>
                                        <span>01.</span> Lobster with melted mozarella
                                      </h6>
                                      <div className="hmi-dec" />
                                      <span className="hero-menu-item-price">
                                        $156
                                      </span>
                                    </div>
                                    <div className="hero-menu-item-details">
                                      <p>
                                        Granny help you treat yourself with a
                                        different meal everyday
                                      </p>
                                    </div>
                                  </div>
                                  {/* header-menu-item end*/}
                                  {/* header-menu-item*/}
                                  <div className="hero-menu-item">
                                    <div className="hero-menu-item-title fl-wrap">
                                      <h6>
                                        <span>02.</span> Butterfly fried shrimps
                                        platter
                                      </h6>
                                      <div className="hmi-dec" />
                                      <span className="hero-menu-item-price">
                                        $98
                                      </span>
                                    </div>
                                    <div className="hero-menu-item-details">
                                      <p>
                                        Etiam tempus felis eros, id lobortis turpis
                                      </p>
                                    </div>
                                  </div>
                                  {/* header-menu-item end*/}
                                </div>
                              </div>
                              {/*tab end */}
                              {/*tab 5*/}
                              <div className="tab">
                                <div id="tab-5" className="tab-content">
                                  {/* header-menu-item*/}
                                  <div className="hero-menu-item">
                                    <div className="hero-menu-item-title fl-wrap">
                                      <h6>
                                        <span>01.</span>Kiwi Coctail
                                      </h6>
                                      <div className="hmi-dec" />
                                      <span className="hero-menu-item-price">
                                        $12
                                      </span>
                                    </div>
                                    <div className="hero-menu-item-details">
                                      <p>
                                        Granny help you treat yourself with a
                                        different meal everyday
                                      </p>
                                    </div>
                                  </div>
                                  {/* header-menu-item end*/}
                                  {/* header-menu-item*/}
                                  <div className="hero-menu-item">
                                    <div className="hero-menu-item-title fl-wrap">
                                      <h6>
                                        <span>02.</span>Summer Beer
                                      </h6>
                                      <div className="hmi-dec" />
                                      <span className="hero-menu-item-price">
                                        $21
                                      </span>
                                    </div>
                                    <div className="hero-menu-item-details">
                                      <p>
                                        Etiam tempus felis eros, id lobortis turpis
                                      </p>
                                    </div>
                                  </div>
                                  {/* header-menu-item end*/}
                                  {/* header-menu-item*/}
                                  <div className="hero-menu-item">
                                    <div className="hero-menu-item-title fl-wrap">
                                      <h6>
                                        <span>03.</span>Red Mojitos
                                      </h6>
                                      <div className="hmi-dec" />
                                      <span className="hero-menu-item-price">
                                        $17
                                      </span>
                                    </div>
                                    <div className="hero-menu-item-details">
                                      <p>usce tempus tempus maximus volutpat</p>
                                    </div>
                                  </div>
                                  {/* header-menu-item end*/}
                                  {/* header-menu-item*/}
                                  <div className="hero-menu-item">
                                    <div className="hero-menu-item-title fl-wrap">
                                      <h6>
                                        <span>04.</span>Cabernet Sauvignon
                                      </h6>
                                      <div className="hmi-dec" />
                                      <span className="hero-menu-item-price">
                                        $40
                                      </span>
                                    </div>
                                    <div className="hero-menu-item-details">
                                      <p>usce tempus tempus maximus volutpat</p>
                                    </div>
                                  </div>
                                  {/* header-menu-item end*/}
                                </div>
                              </div>
                              {/*tab end */}
                            </div>
                            {/*tabs end */}
                          </div>
                        </div>
                      </div>
                      {/*  hero-menu_content end  */}
                      <div className="clearfix" />
                      <a
                        href="menu.html"
                        className="hero_btn"
                        style={{ marginLeft: 30 }}
                      >
                        View Full Menu <i className="fal fa-long-arrow-right" />
                      </a>
                      <a href="#" className="pdf-link">
                        Dowload PDF
                      </a>
                    </div>
                  </div>
                  {/*  hero-menu  end*/}
                </div>
              </section>
              {/*  section  end*/}
              <section data-scrollax-parent="true">
                <div className="container">
                  <div className="section-title">
                    <h4>Our awesome team</h4>
                    <h2>Met Our Chefs</h2>
                    <div className="dots-separator fl-wrap">
                      <span />
                    </div>
                  </div>
                  <div className="about-wrap  fl-wrap">
                    <div className="row">
                      <div className="col-md-4">
                        {/* team-item */}
                        <div className="team-box">
                          <div className="team-photo">
                            <img src="images/team/1.jpg" alt="" className="respimg" />
                            <div className="overlay" />
                            <div className="team-social">
                              <span className="ts_title">Follow</span>
                              <ul className="no-list-style">
                                <li>
                                  <a href="#" target="_blank">
                                    <i className="fab fa-facebook-f" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#" target="_blank">
                                    <i className="fab fa-twitter" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#" target="_blank">
                                    <i className="fab fa-instagram" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#" target="_blank">
                                    <i className="fab fa-vk" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="team-info fl-wrap">
                            <h3> Kevin Gray </h3>
                            <h4>Master chef in New York</h4>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                              sed do eiusmod tempor incididunt ut labore et dolore
                              magna aliqua.
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* team-item  end*/}
                      {/* team-item */}
                      <div className="col-md-4">
                        <div className="team-box">
                          <div className="team-photo">
                            <img src="images/team/2.jpg" alt="" className="respimg" />
                            <div className="overlay" />
                            <div className="team-social">
                              <span className="ts_title">Follow</span>
                              <ul className="no-list-style">
                                <li>
                                  <a href="#" target="_blank">
                                    <i className="fab fa-facebook-f" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#" target="_blank">
                                    <i className="fab fa-twitter" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#" target="_blank">
                                    <i className="fab fa-instagram" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#" target="_blank">
                                    <i className="fab fa-vk" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="team-info fl-wrap">
                            <h3> Austin Evon </h3>
                            <h4>Master chef in Florida</h4>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                              sed do eiusmod tempor incididunt ut labore et dolore
                              magna aliqua.
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* team-item end  */}
                      {/* team-item */}
                      <div className="col-md-4">
                        <div className="team-box">
                          <div className="team-photo">
                            <img src="images/team/3.jpg" alt="" className="respimg" />
                            <div className="overlay" />
                            <div className="team-social">
                              <span className="ts_title">Follow</span>
                              <ul className="no-list-style">
                                <li>
                                  <a href="#" target="_blank">
                                    <i className="fab fa-facebook-f" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#" target="_blank">
                                    <i className="fab fa-twitter" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#" target="_blank">
                                    <i className="fab fa-instagram" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#" target="_blank">
                                    <i className="fab fa-vk" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="team-info fl-wrap">
                            <h3> Taylor Roberts </h3>
                            <h4>Master chef in Maiami</h4>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                              sed do eiusmod tempor incididunt ut labore et dolore
                              magna aliqua.
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* team-item end  */}
                      <div className="col-md-8">
                        <div className="align-text-block">
                          <h4>
                            Want to cook something tasty? Read our best recipes.
                          </h4>
                          <a href="blog.html" className="btn">
                            Recipes Book <i className="fal fa-long-arrow-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="section-dec sec-dec_top" />
                  </div>
                  <div
                    className="wave-bg wave-bg_right "
                    data-scrollax="properties: { translateY: '-150px' }"
                  />
                </div>
              </section>
              {/* section end  */}
              {/* section   */}
              <section
                className="column-section no-padding hidden-section"
                data-scrollax-parent="true"
              >
                <div className="column-wrap-bg right-wrap">
                  <div
                    className="bg par-elem "
                    data-bg="images/bg/10.jpg"
                    data-scrollax="properties: { translateY: '30%' }"
                  />
                  <div className="overlay" />
                  <div className="column-wrap-bg-text">
                    <h3>Our Store</h3>
                    <h4>Want to order food home? Visit our online store.</h4>
                    <a href="about.html" className="btn">
                      Buy online <i className="fal fa-long-arrow-right" />
                    </a>
                  </div>
                </div>
                <div className="column-section-wrap left-column-section dark-bg">
                  <div className="container">
                    <div className="column-text">
                      <div className="section-title">
                        <h4>Book a table</h4>
                        <h2>Upcoming Events</h2>
                        <div className="dots-separator fl-wrap">
                          <span />
                        </div>
                      </div>
                      {/* events-carousel-wrap */}
                      <div className="events-carousel-wrap fl-wrap">
                        <div className="events-carousel fl-wrap">
                          <div className="swiper-container">
                            <div className="swiper-wrapper">
                              {/* swiper-slide */}
                              <div className="swiper-slide">
                                <div className="event-carousel-item">
                                  <h4>Jazz Band Live Event</h4>
                                  <span className="event-date">25 may 2020</span>
                                  <p>
                                    Sed ut perspiciatis unde omnis iste natus error
                                    sit voluptatem accusantium doloremque laudantium
                                    totam aperiam.{" "}
                                  </p>
                                </div>
                              </div>
                              {/* swiper-slide end */}
                              {/* swiper-slide */}
                              <div className="swiper-slide">
                                <div className="event-carousel-item">
                                  <h4>Wine and Steak Day</h4>
                                  <span className="event-date">19 June 2020</span>
                                  <p>
                                    In ut odio libero, at vulputate urna. Nulla
                                    tristique mi a massa convallis cursus. Nulla eu mi
                                    magna. Etiam suscipit gravida.{" "}
                                  </p>
                                </div>
                              </div>
                              {/* swiper-slide end */}
                              {/* swiper-slide */}
                              <div className="swiper-slide">
                                <div className="event-carousel-item">
                                  <h4>Freedom Day Celebration</h4>
                                  <span className="event-date">14 October 2020</span>
                                  <p>
                                    Lorem Ipsum generators on the Internet king this
                                    the first true generator laudantium totam aperiam.{" "}
                                  </p>
                                </div>
                              </div>
                              {/* swiper-slide end */}
                            </div>
                          </div>
                        </div>
                        <div className="ec-button ec-button-prev">
                          <i className="fas fa-caret-left" />
                        </div>
                        <div className="ec-button ec-button-next">
                          <i className="fas fa-caret-right" />
                        </div>
                      </div>
                      <div className="clearfix" />
                      <div className="bold-separator">
                        <span />
                      </div>
                      {/* events-carousel-wrap end */}
                      <a href="#" className="hero_btn no-align show-rb">
                        Book Table Now
                        <i className="fal fa-long-arrow-right" />
                      </a>
                    </div>
                  </div>
                  <div className="illustration_bg">
                    <div className="bg" data-bg="images/bg/dec/6.png" />
                  </div>
                </div>
              </section>
              {/* section end  */}
              {/* section   */}
              <section>
                <div className="brush-dec2 brush-dec_bottom" />
                <div className="container">
                  <div className="section-title">
                    <h4>What said about us</h4>
                    <h2>Customer Reviews</h2>
                    <div className="dots-separator fl-wrap">
                      <span />
                    </div>
                  </div>
                </div>
                <div className="clearfix" />
                <div className="testimonilas-carousel-wrap fl-wrap">
                  <div className="tc-button tc-button-next">
                    <i className="fas fa-caret-right" />
                  </div>
                  <div className="tc-button tc-button-prev">
                    <i className="fas fa-caret-left" />
                  </div>
                  <div className="testimonilas-carousel">
                    <div className="swiper-container">
                      <div className="swiper-wrapper">
                        {/*testi-item*/}
                        <div className="swiper-slide">
                          <div className="testi-item fl-wrap">
                            <div className="testi-avatar">
                              <img src="images/avatar/2.jpg" alt="" />
                            </div>
                            <div className="testimonilas-text fl-wrap">
                              <h3>Andy Dimasky</h3>
                              <div className="star-rating" data-starrating={5}>
                                {" "}
                              </div>
                              <p>
                                "Vestibulum orci felis, ullamcorper non condimentum
                                non, ultrices ac nunc. Mauris non ligula suscipit,
                                vulputate mi accumsan, dapibus felis. Nullam sed
                                sapien dui. Nulla auctor sit amet sem non porta. "
                              </p>
                              <span className="testi-number">01.</span>
                            </div>
                          </div>
                        </div>
                        {/*testi-item end*/}
                        {/*testi-item*/}
                        <div className="swiper-slide">
                          <div className="testi-item fl-wrap">
                            <div className="testi-avatar">
                              <img src="images/avatar/3.jpg" alt="" />
                            </div>
                            <div className="testimonilas-text fl-wrap">
                              <h3>Frank Dellov</h3>
                              <div className="star-rating" data-starrating={4}>
                                {" "}
                              </div>
                              <p>
                                "Vestibulum orci felis, ullamcorper non condimentum
                                non, ultrices ac nunc. Mauris non ligula suscipit,
                                vulputate mi accumsan, dapibus felis. Nullam sed
                                sapien dui. Nulla auctor sit amet sem non porta. "
                              </p>
                              <span className="testi-number">02.</span>
                            </div>
                          </div>
                        </div>
                        {/*testi-item end*/}
                        {/*testi-item*/}
                        <div className="swiper-slide">
                          <div className="testi-item fl-wrap">
                            <div className="testi-avatar">
                              <img src="images/avatar/4.jpg" alt="" />
                            </div>
                            <div className="testimonilas-text fl-wrap">
                              <h3>Centa Simpson</h3>
                              <div className="star-rating" data-starrating={5}>
                                {" "}
                              </div>
                              <p>
                                "Vestibulum orci felis, ullamcorper non condimentum
                                non, ultrices ac nunc. Mauris non ligula suscipit,
                                vulputate mi accumsan, dapibus felis. Nullam sed
                                sapien dui. Nulla auctor sit amet sem non porta. "
                              </p>
                              <span className="testi-number">03.</span>
                            </div>
                          </div>
                        </div>
                        {/*testi-item end*/}
                        {/*testi-item*/}
                        <div className="swiper-slide">
                          <div className="testi-item fl-wrap">
                            <div className="testi-avatar">
                              <img src="images/avatar/5.jpg" alt="" />
                            </div>
                            <div className="testimonilas-text fl-wrap">
                              <h3>Nicolo Svensky</h3>
                              <div className="star-rating" data-starrating={5}>
                                {" "}
                              </div>
                              <p>
                                "Vestibulum orci felis, ullamcorper non condimentum
                                non, ultrices ac nunc. Mauris non ligula suscipit,
                                vulputate mi accumsan, dapibus felis. Nullam sed
                                sapien dui. Nulla auctor sit amet sem non porta. "
                              </p>
                              <span className="testi-number">04.</span>
                            </div>
                          </div>
                        </div>
                        {/*testi-item end*/}
                      </div>
                    </div>
                  </div>
                  <div className="tc-pagination" />
                </div>
              </section>
              {/* section end  */}
            </div>
            {/* content end  */}
            {/* footer */}
            <div className="height-emulator fl-wrap" />
            <footer className="fl-wrap dark-bg fixed-footer">
              <div className="container">
                <div className="footer-top fl-wrap">
                  <a href="index.html" className="footer-logo">
                    <img src="images/logo2.png" alt="" />
                  </a>
                  <div className="lang-wrap">
                    <a href="#" className="act-lang">
                      En
                    </a>
                    <span>/</span>
                    <a href="#">Fr</a>
                  </div>
                  <div className="footer-social">
                    <span className="footer-social-title">Follow us :</span>
                    <ul>
                      <li>
                        <a href="#" target="_blank">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <i className="fab fa-vk" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* footer-widget-wrap */}
                <div className="footer-widget-wrap fl-wrap">
                  <div className="row">
                    {/* footer-widget */}
                    <div className="col-md-4">
                      <div className="footer-widget">
                        <div className="footer-widget-title">About us</div>
                        <div className="footer-widget-content">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Eaque ipsa quae ab illo inventore veritatis et
                            quasi architecto.{" "}
                          </p>
                          <a href="about.html" className="footer-widget-content-link">
                            Read more
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* footer-widget  end*/}
                    {/* footer-widget */}
                    <div className="col-md-4">
                      <div className="footer-widget">
                        <div className="footer-widget-title">Contact info</div>
                        <div className="footer-widget-content">
                          <div className="footer-contacts footer-box fl-wrap">
                            <ul>
                              <li>
                                <span>Call :</span>
                                <a href="#">+489756412322</a> ,{" "}
                                <a href="#">+56897456123</a>
                              </li>
                              <li>
                                <span>Write :</span>
                                <a href="#">yourmail@domain.com</a>
                              </li>
                              <li>
                                <span>Find us : </span>
                                <a href="#">USA 27TH Brooklyn NY</a>
                              </li>
                            </ul>
                          </div>
                          <a
                            href="contacts.html"
                            className="footer-widget-content-link"
                          >
                            Get in Touch
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* footer-widget  end*/}
                    {/* footer-widget */}
                    <div className="col-md-4">
                      <div className="footer-widget">
                        <div className="footer-widget-title">Subscribe</div>
                        <div className="footer-widget-content">
                          <div className="subcribe-form fl-wrap">
                            <p>
                              Want to be notified when we launch a new template or an
                              udpate. Just sign up and we'll send you a notification
                              by email.
                            </p>
                            <form id="subscribe" className="fl-wrap">
                              <input
                                className="enteremail"
                                name="email"
                                id="subscribe-email"
                                placeholder="Your Email"
                                spellCheck="false"
                                type="text"
                              />
                              <button
                                type="submit"
                                id="subscribe-button"
                                className="subscribe-button color-bg"
                              >
                                Send{" "}
                              </button>
                              <label
                                htmlFor="subscribe-email"
                                className="subscribe-message"
                              />
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* footer-widget  end*/}
                  </div>
                </div>
                {/* footer-widget-wrap end*/}
                <div className="footer-bottom fl-wrap">
                  <div className="copyright">
                    © Restabook 2020 . All rights reserved.{" "}
                  </div>
                  <div className="to-top">
                    <span>Back To Top </span>
                    <i className="fal fa-angle-double-up" />
                  </div>
                </div>
              </div>
            </footer>
            {/* footer end*/}
          </div>
          {/* wrapper end */}
          {/* reservation-modal-wrap*/}
          <div className="reservation-modal-wrap">
            <div className="reserv-overlay crm">
              <div className="cd-reserv-overlay-layer" data-frame={25}>
                <div className="reserv-overlay-layer" />
              </div>
            </div>
            <div className="reservation-modal-container bot-element">
              <div className="reservation-modal-item fl-wrap">
                <div className="close-reservation-modal crm">
                  <i className="fal fa-times" />
                </div>
                <div className="reservation-bg" />
                <div className="section-title">
                  <h4>Don't forget to book a table</h4>
                  <h2>Table Reservations</h2>
                  <div className="dots-separator fl-wrap">
                    <span />
                  </div>
                </div>
                <div className="reservation-wrap">
                  <div id="reserv-message" />
                  <form
                    className="custom-form"
                    action="https://restabook.kwst.net/light/php/reservation.php"
                    name="reservationform"
                    id="reservationform"
                  >
                    <fieldset>
                      <div className="row">
                        <div className="col-sm-6">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Your Name *"
                            defaultValue=""
                          />
                        </div>
                        <div className="col-sm-6">
                          <input
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Email Address *"
                            defaultValue=""
                          />
                        </div>
                        <div className="col-sm-6">
                          <input
                            type="text"
                            name="phone"
                            id="phone"
                            placeholder="Phone *"
                            defaultValue=""
                          />
                        </div>
                        <div className="col-sm-6">
                          <div className="fl-wrap">
                            <select
                              name="numperson"
                              id="persons"
                              data-placeholder="Persons"
                              className="chosen-select no-search-select"
                            >
                              <option data-display="Persons">Any</option>
                              <option value={1}>1 Person</option>
                              <option value={2}>2 People</option>
                              <option value={3}>3 People</option>
                              <option value={4}>4 People</option>
                              <option value={5}>5 People</option>
                              <option value="Banquet">Banquet</option>
                            </select>
                          </div>
                        </div>
                        <div className="clearfix" />
                        <div className="col-sm-6">
                          <div className="date-container2 fl-wrap">
                            <input
                              type="text"
                              placeholder="Date"
                              id="res_date"
                              name="resdate"
                              defaultValue=""
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="fl-wrap">
                            <select
                              name="restime"
                              id="resrv-time"
                              data-placeholder="Time"
                              className="chosen-select no-search-select"
                            >
                              <option data-display="Time">Any</option>
                              <option value="10:00am">10:00 am</option>
                              <option value="11:00am">11:00 am</option>
                              <option value="12:00pm">12:00 pm</option>
                              <option value="1:00pm">1:00 pm</option>
                              <option value="2:00pm">2:00 pm</option>
                              <option value="3:00pm">3:00 pm</option>
                              <option value="4:00pm">4:00 pm</option>
                              <option value="5:00pm">5:00 pm</option>
                              <option value="6:00pm">6:00 pm</option>
                              <option value="7:00pm">7:00 pm</option>
                              <option value="8:00pm">8:00 pm</option>
                              <option value="9:00pm">9:00 pm</option>
                              <option value="10:00pm">10:00 pm</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <textarea
                        name="comments"
                        id="comments"
                        cols={30}
                        rows={3}
                        placeholder="Your Message:"
                        defaultValue={""}
                      />
                      <div className="clearfix" />
                      <button className="btn color-bg" id="reservation-submit">
                        Reserve Table <i className="fal fa-long-arrow-right" />
                      </button>
                    </fieldset>
                  </form>
                </div>
                {/* reservation-wrap end*/}
              </div>
            </div>
          </div>
          {/* reservation-modal-wrap end*/}
          {/* cursor*/}
          <div className="element">
            <div className="element-item" />
          </div>
          {/* cursor end*/}
        </div>
      </>

    </>
  );
};
import $ from 'jquery';
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';

import { useEffect, useState } from 'react';
import UserNavbar from './UserNavbar';
import { useSelector } from 'react-redux';


export const UserViewMenu = () => {
    const menu = useSelector(state => {
        return state.menu.AllItems
    })
    useEffect(() => {
        // jQuery code to set background images
        var a = $(".bg");
        a.each(function () {
            if ($(this).attr("data-bg")) {
                $(this).css("background-image", "url(" + $(this).data("bg") + ")");
            }
        });

        // Initialize PerfectScrollbar
        if ($(".header-cart_wrap_container").length > 0) {
            var aps = new PerfectScrollbar('.header-cart_wrap_container', {
                swipeEasing: true,
                minScrollbarLength: 20
            });
        }
    }, []);
    const [menuItems, setMenuItems] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All Items');

    const items = [...new Set(menuItems.map(item => item.category_name))];
    const baseURL = 'http://localhost:8080/';

    function addToCart(items_id) {
        const useremail = sessionStorage.getItem("useremail");
        alert(items_id);
        console.log(useremail)
        
    }
    useEffect(() => {
        if (menu.length !== 0) {
            setSelectedCategory(menu[0].category_name);
            setMenuItems(menu);
        }
    }, [menu])

    return (
        <>
            <UserNavbar />

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

                {/*header end */}
                {/* wrapper  */}
                <div id="wrapper">
                    {/* content  */}
                    <div className="content">
                        {/*  section  */}
                        <section
                            className="parallax-section hero-section hidden-section"
                            data-scrollax-parent="true"
                        >
                            <div
                                className="bg par-elem "
                                data-bg="images/bg/10.jpg"
                                data-scrollax="properties: { translateY: '30%' }"
                            />
                            <div className="overlay" />
                            <div className="container">
                                <div className="section-title">
                                    <h4>Special menu offers.</h4>
                                    <h2>Discover Our menu</h2>
                                    <div className="dots-separator fl-wrap">
                                        <span />
                                    </div>
                                </div>
                            </div>
                            <div className="hero-section-scroll">
                                <div className="mousey">
                                    <div className="scroller" />
                                </div>
                            </div>
                            <div className="brush-dec" />
                        </section>
                        {/*  section  end*/}
                        {/*  section  */}


                        <section className="hidden-section" data-scrollax-parent="true" id="sec2">
                            <div className="container">

                                {/* gallery-filters */}

                                <div className="gallery-filters gth " id='food-category' >
                                    <a
                                        href="#"
                                        className={`gallery-filter ${selectedCategory === 'All Items' ? 'gallery-filter-active' : ''}`}
                                        data-filter="*"
                                        onClick={() => setSelectedCategory('All Items')}>
                                        <span></span> All Items
                                    </a>
                                    {items.map((category, index) => (
                                        <a
                                            key={index}
                                            href="#"
                                            className={`gallery-filter ${selectedCategory === category ? 'gallery-filter-active' : ''}`}
                                            data-filter="*"
                                            onClick={() => setSelectedCategory(category)}
                                        >
                                            <span></span> {category}
                                        </a>
                                    ))}


                                </div>

                                {/* gallery-filters end*/}
                                {/* gallery start */}

                                <div
                                    className="gallery-items grid-big-pad  lightgallery three-column fl-wrap"
                                    style={{ marginBottom: 50 }}
                                >
                                    {/* gallery-item*/}
                                    {menuItems
                                        .filter(menuItem => selectedCategory === 'All Items' || menuItem.category_name === selectedCategory)
                                        .map((menuItem, index) => (

                                            <div className="gallery-item desserts" key={index}>

                                                <div className="grid-item-holder hov_zoom">
                                                    {/* <a
                                                            href="images/menu/1.jpg"
                                                            className="box-media-zoom   popup-image"
                                                        >
                                                            <i className="fal fa-search" />
                                                        </a> */}
                                                    <img src={`${baseURL}${menuItem.photo}`} id='' alt="" />
                                                </div>
                                                <div className="grid-item-details">
                                                    <h3>
                                                        {menuItem.name} <span>Sale -30%</span>
                                                    </h3>
                                                    <p>{menuItem.description}
                                                        Seasoned with an herb crust, served with au jus and handcarved to
                                                        order.{" "}
                                                    </p>
                                                    <div className="grid-item_price">
                                                        <span>RS. {menuItem.price}</span>

                                                        <div className="add_cart" onClick={() => addToCart(menuItem.items_id)}>Add To Cart</div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    {/* gallery-item end*/}

                                </div>
                                {/* gallery end */}

                                <a href="#" className="btn  " id='download-menu'>
                                    Download menu in PDF
                                    <i className="fal fa-long-arrow-right" />
                                </a>
                            </div>


                            <div className="section-bg">
                                <div className="bg" data-bg="images/bg/dec/section-bg.png" />
                            </div>
                        </section>


                    </div>
                </div>
            </div>


        </>


    )
}
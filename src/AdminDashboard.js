import AdminNavbar from "./AdminNavbar"
import React, { useEffect } from 'react';
import $ from 'jquery';
import PerfectScrollbar from 'perfect-scrollbar';

export const AdminDashboard = () => {
    const username = sessionStorage.getItem("un");

    useEffect(() => {
        const a = $(".bg");
        console.log('Elements with class bg:', a);
        a.each(function () {
            if ($(this).attr("data-bg")) {
                $(this).css("background-image", "url(" + $(this).data("bg") + ")");
            }
        });
        if ($(".header-cart_wrap_container").length > 0) {
            new PerfectScrollbar('.header-cart_wrap_container', {
                swipeEasing: true,
                minScrollbarLength: 20
            });
        }

    }, []);


    return (
        <>
            <AdminNavbar />

            <section data-scrollax-parent="true">
                <div className="container">
                    <div className="section-title">
                        <h2>Welcome {username} ;</h2>
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
                                                <h2>MENU</h2>
                                                <h4>EDIT MENU</h4>
                                            </div>

                                        </div>
                                        
                                    </div>
                                    <a href="managemenu" className="content-back" style={{textDecoration:'none'}}>
                                        <div className="cf-inner">
                                        
                                            <div  className="inner">
                                         
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
                                    
                                    </a>
                                    
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
                                                <h2>Reservations</h2>
                                                <h4>Manage Reservations</h4>
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
                                                <h2>FeedBacks</h2>
                                                <h4>Manage FeedBacks</h4>
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
        </>
    )
}
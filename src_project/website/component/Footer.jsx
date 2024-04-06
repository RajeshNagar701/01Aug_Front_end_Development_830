import React from 'react'
import { Helmet } from 'react-helmet'

function Footer() {
    return (
        <>
      
        <section className="info_section  layout_padding2-top">
            <div className="social_container">
                <div className="social_box">
                    <a href>
                        <i className="fa fa-facebook" aria-hidden="true" />
                    </a>
                    <a href>
                        <i className="fa fa-twitter" aria-hidden="true" />
                    </a>
                    <a href>
                        <i className="fa fa-instagram" aria-hidden="true" />
                    </a>
                    <a href>
                        <i className="fa fa-youtube" aria-hidden="true" />
                    </a>
                </div>
            </div>
            <div className="info_container ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-3">
                            <h6>
                                ABOUT US
                            </h6>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet,
                            </p>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="info_form ">
                                <h5>
                                    Newsletter
                                </h5>
                                <form action="#">
                                    <input type="email" placeholder="Enter your email" />
                                    <button>
                                        Subscribe
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <h6>
                                NEED HELP
                            </h6>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet,
                            </p>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <h6>
                                CONTACT US
                            </h6>
                            <div className="info_link-box">
                                <a href>
                                    <i className="fa fa-map-marker" aria-hidden="true" />
                                    <span> Gb road 123 london Uk </span>
                                </a>
                                <a href>
                                    <i className="fa fa-phone" aria-hidden="true" />
                                    <span>+01 12345678901</span>
                                </a>
                                <a href>
                                    <i className="fa fa-envelope" aria-hidden="true" />
                                    <span> demo@gmail.com</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* footer section */}
            <footer className=" footer_section">
                <div className="container">
                    <p>
                        © <span id="displayYear" /> All Rights Reserved By
                        <a href="https://html.design/">Free Html Templates</a>
                    </p>
                </div>
            </footer>
            {/* footer section */}
        </section>

     

        </>
    )
}

export default Footer
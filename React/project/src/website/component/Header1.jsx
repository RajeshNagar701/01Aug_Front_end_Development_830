import React from 'react'
import { Helmet } from 'react-helmet'
import { NavLink } from 'react-router-dom'

function Header1() {
    return (
        <div>
           
            
            <div className="hero_area">
                {/* header section strats */}
                <header className="header_section">
                    <nav className="navbar navbar-expand-lg custom_nav-container ">
                        <NavLink className="navbar-brand" to="/">
                            <span>
                                Giftos
                            </span>
                        </NavLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav  ">
                                <li className="nav-item active">
                                    <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/shop">
                                        Shop
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/why">
                                        Why Us
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/testimonial">
                                        Testimonial
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
                                </li>
                            </ul>
                            <div className="user_option">
                                <a href>
                                    <i className="fa fa-user" aria-hidden="true" />
                                    <span>
                                        Login
                                    </span>
                                </a>
                                <a href>
                                    <i className="fa fa-shopping-bag" aria-hidden="true" />
                                </a>
                                <form className="form-inline ">
                                    <button className="btn nav_search-btn" type="submit">
                                        <i className="fa fa-search" aria-hidden="true" />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </nav>
                </header>
                {/* end header section */}
                {/* slider section */}
                <section className="slider_section">
                    <div className="slider_container">
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-md-7">
                                                <div className="detail-box">
                                                    <h1>
                                                        Welcome To Our <br />
                                                        Gift Shop
                                                    </h1>
                                                    <p>
                                                        Sequi perspiciatis nulla reiciendis, rem, tenetur impedit, eveniet non necessitatibus error distinctio mollitia suscipit. Nostrum fugit doloribus consequatur distinctio esse, possimus maiores aliquid repellat beatae cum, perspiciatis enim, accusantium perferendis.
                                                    </p>
                                                    <a href>
                                                        Contact Us
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-md-5 ">
                                                <div className="img-box">
                                                    <img src="website/images/slider-img.png" alt />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item ">
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-md-7">
                                                <div className="detail-box">
                                                    <h1>
                                                        Welcome To Our <br />
                                                        Gift Shop
                                                    </h1>
                                                    <p>
                                                        Sequi perspiciatis nulla reiciendis, rem, tenetur impedit, eveniet non necessitatibus error distinctio mollitia suscipit. Nostrum fugit doloribus consequatur distinctio esse, possimus maiores aliquid repellat beatae cum, perspiciatis enim, accusantium perferendis.
                                                    </p>
                                                    <a href>
                                                        Contact Us
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-md-5 ">
                                                <div className="img-box">
                                                    <img src="website/images/slider-img.png" alt />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item ">
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-md-7">
                                                <div className="detail-box">
                                                    <h1>
                                                        Welcome To Our <br />
                                                        Gift Shop
                                                    </h1>
                                                    <p>
                                                        Sequi perspiciatis nulla reiciendis, rem, tenetur impedit, eveniet non necessitatibus error distinctio mollitia suscipit. Nostrum fugit doloribus consequatur distinctio esse, possimus maiores aliquid repellat beatae cum, perspiciatis enim, accusantium perferendis.
                                                    </p>
                                                    <a href>
                                                        Contact Us
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-md-5 ">
                                                <div className="img-box">
                                                    <img src="website/images/slider-img.png" alt />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel_btn-box">
                                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                    <i className="fa fa-arrow-left" aria-hidden="true" />
                                    <span className="sr-only">Previous</span>
                                </a>
                                <img src="website/images/line.png" alt />
                                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                    <i className="fa fa-arrow-right" aria-hidden="true" />
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                {/* end slider section */}
            </div>
            <Helmet>
           
        
           
       </Helmet>
       
        </div>

    )
}

export default Header1
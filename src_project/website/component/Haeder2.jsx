import React from 'react'
import { Helmet } from 'react-helmet'
import { NavLink,useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

function Haeder2({ active }) {

    const redirect=useNavigate();

    const userlogout=()=>{
        localStorage.removeItem('uid');
        localStorage.removeItem('uname');
        toast.success('Logout Success');
        redirect('/');
        return false;
    }

    return (
        <>
            <Helmet>
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
                <link rel="stylesheet" type="text/css" href="website/css/bootstrap.css" />
                <link href="website/css/style.css" rel="stylesheet" />
                <link href="website/css/responsive.css" rel="stylesheet" />
            </Helmet>
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
                        <div className="collapse navbar-collapse innerpage_navbar" id="navbarSupportedContent">
                            <ul className="navbar-nav  ">
                                <li className="nav-item ">
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
                                {(() => {
                                    if (localStorage.getItem('uid')) {
                                        return (
                                            <>
                                                <NavLink to="/signup">
                                                    <i className="fa fa-user" aria-hidden="true" />
                                                    <span>
                                                        My Account /{localStorage.getItem('uname')}
                                                    </span>
                                                </NavLink>
                                                <a href="javascript:void(0)" onClick={userlogout}>
                                                    <span>
                                                       Logout
                                                    </span>
                                                </a>
                                            </>
                                        )
                                    }
                                    else {
                                        return (
                                            <NavLink to="/signup">
                                                <i className="fa fa-user" aria-hidden="true" />
                                                <span>
                                                    Signup
                                                </span>
                                            </NavLink>
                                        )
                                    }
                                })()}
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
            </div>
        </>
    )
}

export default Haeder2
import React from 'react'
import { Helmet } from 'react-helmet'
import { NavLink } from 'react-router-dom'

function Aheader() {
    return (
        <div>
            <Helmet>
                <link href="admin/assets/css/bootstrap.css" rel="stylesheet" />
                <link href="admin/assets/css/font-awesome.css" rel="stylesheet" />

                <link href="admin/assets/css/custom.css" rel="stylesheet" />
                <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css' />
                <link href="admin/assets/js/dataTables/dataTables.bootstrap.css" rel="stylesheet" />
            </Helmet>
            <div>
                <nav className="navbar navbar-default navbar-cls-top " role="navigation" style={{ marginBottom: 0 }}>
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".sidebar-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                        </button>
                        <a className="navbar-brand" href="index.html">Binary admin</a>
                    </div>
                    <div style={{ color: 'white', padding: '15px 50px 5px 50px', float: 'right', fontSize: 16 }}> Last access : 30 May 2014 &nbsp; <a href="#" className="btn btn-danger square-btn-adjust">Logout</a> </div>
                </nav>
                {/* /. NAV TOP  */}
                <nav className="navbar-default navbar-side" role="navigation">
                    <div className="sidebar-collapse">
                        <ul className="nav" id="main-menu">
                            <li className="text-center">
                                <img src="admin/assets/img/find_user.png" className="user-image img-responsive" />
                            </li>
                            <li>
                                <NavLink to="/dashboard"><i className="fa fa-dashboard fa-3x" /> Dashboard</NavLink>
                            </li>
                            
                           
                            <li>
                                <a href="#"><i className="fa fa-table fa-3x" /> Categories<span className="fa arrow" /></a>
                                <ul className="nav nav-second-level">
                                    <li>
                                        <NavLink to="/add_categories">Add</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/manage_categories">Manage</NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#"><i className="fa fa-table fa-3x" /> Products<span className="fa arrow" /></a>
                                <ul className="nav nav-second-level">
                                    <li>
                                        <NavLink to="/add_products">Add</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/manage_products">Manage</NavLink>
                                    </li>
                                   
                                </ul>
                            </li>
                            <li>
                                <NavLink to="/manage_customer"><i className="fa fa-table fa-3x" />Customer</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <Helmet>
                
            </Helmet>
        </div>
    )
}

export default Aheader
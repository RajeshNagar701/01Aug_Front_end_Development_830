import React from 'react'
import { Helmet } from 'react-helmet'

function Admin_login() {
    return (
        <>
              <Helmet>
                <link href="admin/assets/css/bootstrap.css" rel="stylesheet" />
                <link href="admin/assets/css/font-awesome.css" rel="stylesheet" />
                <link href="admin/assets/js/morris/morris-0.4.3.min.css" rel="stylesheet" />
                <link href="admin/assets/css/custom.css" rel="stylesheet" />
                <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css' />
                <link href="admin/assets/js/dataTables/dataTables.bootstrap.css" rel="stylesheet" />
            </Helmet>
            <div id="wrapper">
                
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
                </nav>
                {/* /. NAV TOP  */}
               
                {/* /. NAV SIDE  */}
                <div id="page-wrapper">
                    <div id="page-inner">
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Admin Login</h2>
                               
                            </div>
                        </div>
                        {/* /. ROW  */}
                        <hr />
                    </div>
                    {/* /. PAGE INNER  */}
                </div>
                {/* /. PAGE WRAPPER  */}
            </div>

        </>
    )
}

export default Admin_login
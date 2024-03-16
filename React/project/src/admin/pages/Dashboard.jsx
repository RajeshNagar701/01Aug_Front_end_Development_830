import React from 'react'
import Aheader from '../component/Aheader'

function Dashboard() {
    return (
        <div id="wrapper">
           <Aheader/>
            <div id="page-wrapper">
                <div id="page-inner">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Admin Dashboard</h2>
                            <h5>Welcome Jhon Deo , Love to see you back. </h5>
                        </div>
                    </div>
                    {/* /. ROW  */}
                    <hr />
                    <div className="row">
                        <div className="col-md-3 col-sm-6 col-xs-6">
                            <div className="panel panel-back noti-box">
                                <span className="icon-box bg-color-red set-icon">
                                    <i className="fa fa-envelope-o" />
                                </span>
                                <div className="text-box">
                                    <p className="main-text">120 New</p>
                                    <p className="text-muted">Messages</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-6">
                            <div className="panel panel-back noti-box">
                                <span className="icon-box bg-color-green set-icon">
                                    <i className="fa fa-bars" />
                                </span>
                                <div className="text-box">
                                    <p className="main-text">30 Tasks</p>
                                    <p className="text-muted">Remaining</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-6">
                            <div className="panel panel-back noti-box">
                                <span className="icon-box bg-color-blue set-icon">
                                    <i className="fa fa-bell-o" />
                                </span>
                                <div className="text-box">
                                    <p className="main-text">240 New</p>
                                    <p className="text-muted">Notifications</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-6">
                            <div className="panel panel-back noti-box">
                                <span className="icon-box bg-color-brown set-icon">
                                    <i className="fa fa-rocket" />
                                </span>
                                <div className="text-box">
                                    <p className="main-text">3 Orders</p>
                                    <p className="text-muted">Pending</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /. ROW  */}
                    <hr />
                    
                </div>
                {/* /. PAGE INNER  */}
            </div>
            {/* /. PAGE WRAPPER  */}
        </div>

    )
}

export default Dashboard
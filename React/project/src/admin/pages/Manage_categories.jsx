import React from 'react'
import Aheader from '../component/Aheader'
import { Helmet } from 'react-helmet'

function Manage_categories() {
    return (
        <div id="wrapper">
                <Helmet>
                <script src="admin/assets/js/dataTables/jquery.dataTables.js"></script>
                <script src="admin/assets/js/dataTables/dataTables.bootstrap.js"></script>
               
                </Helmet>
            <Aheader/>
            
            <div id="page-wrapper">
                <div id="page-inner">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Add Categories</h2>
                            <h5>Welcome Jhon Deo , Love to see you back. </h5>
                        </div>
                    </div>
                    {/* /. ROW  */}
                    <hr />
                    <div className="row">
                        <div className="col-md-12">
                            {/* Advanced Tables */}
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    Advanced Tables
                                </div>
                                <div className="panel-body">
                                    <div className="table-responsive">
                                        <table className="table table-striped table-bordered table-hover" id="dataTables-example">
                                            <thead>
                                                <tr>
                                                    <th>Rendering engine</th>
                                                    <th>Browser</th>
                                                    <th>Platform(s)</th>
                                                    <th>Engine version</th>
                                                    <th>CSS grade</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="odd gradeX">
                                                    <td>Trident</td>
                                                    <td>Internet Explorer 4.0</td>
                                                    <td>Win 95+</td>
                                                    <td className="center">4</td>
                                                    <td className="center">X</td>
                                                </tr>
                                                <tr className="even gradeC">
                                                    <td>Trident</td>
                                                    <td>Internet Explorer 5.0</td>
                                                    <td>Win 95+</td>
                                                    <td className="center">5</td>
                                                    <td className="center">C</td>
                                                </tr>
                                                <tr className="odd gradeA">
                                                    <td>Trident</td>
                                                    <td>Internet Explorer 5.5</td>
                                                    <td>Win 95+</td>
                                                    <td className="center">5.5</td>
                                                    <td className="center">A</td>
                                                </tr>
                                                
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            {/*  End  Bordered Table  */}
                        </div>
                    </div>
                   
                </div>
            </div>
            {/* /. PAGE INNER  */}
            <Helmet>
            <script src="admin/assets/js/bootstrap.min.js"></script>
           
            <script src="admin/assets/js/dataTables/jquery.dataTables.js"></script>
            <script src="admin/assets/js/dataTables/dataTables.bootstrap.js"></script>
        
            </Helmet>
        </div>

    )
}

export default Manage_categories
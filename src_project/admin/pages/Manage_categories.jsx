import React, { useEffect, useState } from 'react'
import Aheader from '../component/Aheader'
import { Helmet } from 'react-helmet'
import axios from 'axios';
import { toast } from 'react-toastify';

function Manage_categories() {

    useEffect(() => {
        fetch();
    }, []);
    const [data, setData] = useState([]);
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/categories`);
        console.log(res.data);
        setData(res.data);
    }
    const deleteHandel = async (id) => {
        const res = await axios.delete(`http://localhost:3000/categories/${id}`);
        console.log(res.data);
        toast.success('Data Delete SUccess');
        fetch();
    }
    

    return (
        <div id="wrapper">
            <Helmet>
                <script src="admin/assets/js/dataTables/jquery.dataTables.js"></script>
                <script src="admin/assets/js/dataTables/dataTables.bootstrap.js"></script>

            </Helmet>
            <Aheader />

            <div id="page-wrapper">
                <div id="page-inner">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Manage Categories</h2>
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
                                                    <th>ID</th>
                                                    <th>Categories Name</th>
                                                    <th>Images</th>
                                                    <th align="center">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    data && data.map((value,index,arr) => {
                                                        return (
                                                            <tr className="odd gradeX" key={index}>
                                                                <td>{value.id}</td>
                                                                <td>{value.cate_name}</td>
                                                                <td><img src={value.cate_img} width="50px" alt="" /></td>
                                                                <td className="center">
                                                                    <button className='btn btn-danger' onClick={()=>deleteHandel(value.id)} >Delete</button>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }


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
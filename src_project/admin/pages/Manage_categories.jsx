import React, { useEffect, useState } from 'react'
import Aheader from '../component/Aheader'
import { Helmet } from 'react-helmet'
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link, redirect, useNavigate } from 'react-router-dom';

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

    const [formvalue, setFormvalue] = useState({
        id: "",
        cate_name: "",
        cate_img: ""
    });

    const editdata = async (id) => {
        const res = await axios.get(`http://localhost:3000/categories/${id}`);
        console.log(res.data);
        setFormvalue(res.data);
    }

  

    const onChangehandel = (e) => {
        setFormvalue({ ...formvalue,[e.target.name]: e.target.value });
        console.log(formvalue);
    }


    function validation() {
        var ans = true;
        if (formvalue.cate_name == "") {
            toast.error('Categories Name Field is required');
            ans = false;
            return false;
        }
        if (formvalue.cate_img == "") {
            toast.error('Categories Image Field is required');
            ans = false;
            return false;
        }

        return ans;
    }

    const submitHandel = async (e) => {
        e.preventDefault();
        if (validation()) {
            const res = await axios.patch(`http://localhost:3000/categories/${formvalue.id}`, formvalue);
            console.log(res);
            if (res.status == 200) {
                toast.success('Update Success');
                setFormvalue({ ...formvalue, id: "", cate_name: "", cate_img: "" });
                fetch();
            }
        }
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
                                                    data && data.map((value, index, arr) => {
                                                        return (
                                                            <tr className="odd gradeX" key={index}>
                                                                <td>{value.id}</td>
                                                                <td>{value.cate_name}</td>
                                                                <td><img src={value.cate_img} width="50px" alt="" /></td>
                                                                <td className="center">
                                                                    <button className='btn btn-danger' onClick={() => deleteHandel(value.id)} >Delete</button>
                                                                    <button className='btn btn-danger'  data-toggle="modal" data-target="#myModal" onClick={() => editdata(value.id)} >Edit</button>

                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }


                                            </tbody>
                                        </table>
                                        <div className="modal" id="myModal">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    {/* Modal Header */}
                                                    <div className="modal-header">
                                                        <h4 className="modal-title">Edit Categories</h4>
                                                        <button type="button" className="close" data-dismiss="modal">×</button>
                                                    </div>
                                                    {/* Modal body */}
                                                    <div className="modal-body">
                                                        <form role="form" action=""  method='post'>
                                                            <div className="form-group">
                                                                <label>Categories Name</label>
                                                                <input type="text" onChange={onChangehandel} value={formvalue.cate_name} name="cate_name" className="form-control" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label>Categories Image</label>
                                                                <input type="url" onChange={onChangehandel} value={formvalue.cate_img} name="cate_img" className="form-control" />
                                                            </div>

                                                            <button type="submit" className="btn btn-default" onClick={submitHandel} data-dismiss="modal">Update</button>
                                                        </form>

                                                    </div>
                                                    {/* Modal footer */}
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

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
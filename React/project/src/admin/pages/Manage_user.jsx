import React, { useEffect, useState } from 'react'
import Aheader from '../component/Aheader'
import { Helmet } from 'react-helmet'
import axios from 'axios';
import { toast } from 'react-toastify';

function Manage_user() {

    useEffect(() => {
        fetch();
    }, []);
    const [data, setData] = useState([]);
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/user`);
        console.log(res.data);
        setData(res.data);
    }
    const deleteHandel = async (id) => {
        const res = await axios.delete(`http://localhost:3000/user/${id}`);
        console.log(res.data);
        toast.success('Data Delete SUccess');
        fetch();
    }
    const statusHandel = async (id) => {
        const res = await axios.get(`http://localhost:3000/user/${id}`);
        if (res.data.status == "Block") {
            const res1 = await axios.patch(`http://localhost:3000/user/${id}`, { status: "Unblock" });
            if (res1.status == 200) {
                console.log(res.data);
                toast.success('Unblock SUccess');
                fetch();
            }
        }
        else {
            const res1 = await axios.patch(`http://localhost:3000/user/${id}`, { status: "Block" });
            if (res1.status == 200) {
                localStorage.removeItem('uid');
                localStorage.removeItem('uname');
                console.log(res.data);
                toast.success('Block SUccess');
                fetch();
            }
        }

    }


    return (
        <div id="wrapper">
            <Helmet>
                <script src="/admin/assets/js/dataTables/jquery.dataTables.js"></script>
                <script src="/admin/assets/js/dataTables/dataTables.bootstrap.js"></script>

            </Helmet>
            <Aheader />

            <div id="page-wrapper">
                <div id="page-inner">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Manage User</h2>
                        </div>
                    </div>
                    {/* /. ROW  */}
                    <hr />
                    <div className="row">
                        <div className="col-md-12">
                            {/* Advanced Tables */}
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    Manage User
                                </div>
                                <div className="panel-body">
                                    <div className="table-responsive">
                                        <table className="table table-striped table-bordered table-hover" id="dataTables-example">
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Name</th>
                                                    <th>Email</th>
                                                    <th>Mobile</th>
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
                                                                <td>{value.name}</td>
                                                                <td>{value.email}</td>
                                                                <td>{value.mobile}</td>

                                                                <td><img src={value.img} width="50px" alt="" /></td>
                                                                <td className="center">
                                                                    <button className='btn btn-danger' onClick={() => deleteHandel(value.id)} >Delete</button>
                                                                    <button className='btn btn-danger' onClick={() => statusHandel(value.id)} >{value.status}</button>
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
                <script src="/admin/assets/js/bootstrap.min.js"></script>

                <script src="/admin/assets/js/dataTables/jquery.dataTables.js"></script>
                <script src="/admin/assets/js/dataTables/dataTables.bootstrap.js"></script>

            </Helmet>
        </div>

    )
}

export default Manage_user
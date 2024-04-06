import React, { useState } from 'react'
import Aheader from '../component/Aheader'
import axios from 'axios';
import { toast } from 'react-toastify';

function Add_categories() {

    const [formvalue, setFormvalue] = useState({
        id: "",
        cate_name: "",
        cate_img: ""
    });

    const onChangehandel = (e) => {
        setFormvalue({ ...formvalue, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
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
            const res = await axios.post(`http://localhost:3000/categories`, formvalue);
            console.log(res);
            if (res.status == 201) {
                toast.success('Data Add Success');
                setFormvalue({ ...formvalue, id: "", cate_name: "", cate_img: "" });
            }
        }
    }

    return (
        <div id="wrapper">
            <Aheader />
            <div id="page-wrapper">
                <div id="page-inner">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Forms Page</h2>
                            <h5>Welcome Jhon Deo , Love to see you back. </h5>
                        </div>
                    </div>
                    {/* /. ROW  */}
                    <hr />
                    <div className="row">
                        <div className="col-md-12">
                            {/* Form Elements */}
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    Form Element Examples
                                </div>
                                <div className="panel-body">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <h3>Add Categories</h3>
                                            <form role="form" action="" onSubmit={submitHandel} method='post'>
                                                <div className="form-group">
                                                    <label>Categories Name</label>
                                                    <input type="text" onChange={onChangehandel} value={formvalue.cate_name} name="cate_name" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <label>Categories Image</label>
                                                    <input type="url" onChange={onChangehandel} value={formvalue.cate_img} name="cate_img" className="form-control" />
                                                </div>

                                                <button type="submit" className="btn btn-default">Submit Button</button>
                                            </form>

                                        </div>



                                    </div>
                                </div>
                            </div>
                            {/* End Form Elements */}
                        </div>
                    </div>
                </div>
                {/* /. PAGE INNER  */}
            </div>
            {/* /. PAGE WRAPPER  */}
        </div>

    )
}

export default Add_categories
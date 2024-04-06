import React, { useState, useEffect } from 'react'
import Aheader from '../component/Aheader'
import axios from 'axios';
import { toast } from 'react-toastify';

function Add_products() {

    useEffect(() => {
        fetch();
    }, []);
    const [data, setData] = useState([]);
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/categories`);
        console.log(res.data);
        setData(res.data);
    }

    const [formvalue, setFormvalue] = useState({
        id: "",
        cate_id:"",
        prod_name: "",
        desc: "",
        price: "",
        prod_img: ""
    });

    const onChangehandel = (e) => {
        setFormvalue({ ...formvalue, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
        console.log(formvalue);
    }

    function validation() {
        var ans = true;
        if (formvalue.cate_id == "") {
            toast.error('Select Categories Field is required');
            ans = false;
            return false;
        }
        if (formvalue.prod_name == "") {
            toast.error('Product Name Field is required');
            ans = false;
            return false;
        }
        
        if (formvalue.desc == "") {
            toast.error('Description Field is required');
            ans = false;
            return false;
        }
        if (formvalue.price == "") {
            toast.error('Price Field is required');
            ans = false;
            return false;
        }
        if (formvalue.prod_img == "") {
            toast.error('Prodcuts Images Field is required');
            ans = false;
            return false;
        }
        return ans;
    }

    const submitHandel = async (e) => {
        e.preventDefault();
        if (validation()) {
            const res = await axios.post(`http://localhost:3000/products`, formvalue);
            console.log(res);
            if (res.status == 201) {
                toast.success('Data Add Success');
                setFormvalue({ ...formvalue, id: "", prod_name: "", desc: "", price: "", prod_img: "" });
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
                                            <h3>Add Products</h3>
                                            <form role="form" action="" onSubmit={submitHandel} method='post'>
                                                <div className="form-group">
                                                    <label>Product Categorties</label>
                                                    <select onChange={onChangehandel} value={formvalue.cate_id} name="cate_id" className="form-control">
                                                        <option value="">Select Categories</option>
                                                        {
                                                            data && data.map((value) => {
                                                                return (
                                                                    <option value={value.id}>{value.cate_name}</option>
                                                                )
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <label>Product Name</label>
                                                    <input type="text" onChange={onChangehandel} value={formvalue.prod_name} name="prod_name" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <label>Product Price</label>
                                                    <input type="number" onChange={onChangehandel} value={formvalue.price} name="price" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <label>Description</label>
                                                    <textarea onChange={onChangehandel} value={formvalue.desc} name="desc" className="form-control" ></textarea>
                                                </div>

                                                <div className="form-group">
                                                    <label>Categories Image</label>
                                                    <input type="url" onChange={onChangehandel} value={formvalue.prod_img} name="prod_img" className="form-control" />
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

export default Add_products
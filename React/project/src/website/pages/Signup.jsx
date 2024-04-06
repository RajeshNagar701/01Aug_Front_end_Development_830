import React, { useState } from 'react'
import Haeder2 from '../component/Haeder2'
import Footer from '../component/Footer'
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

function Signup() {

    const [formvalue, setFormvalue] = useState({
        id: "",
        name: "",
        email: "",
        password: "",
        mobile:"",
        img:"",
        status:""
    });

    const onChangehandel = (e) => {
        setFormvalue({ ...formvalue, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
        console.log(formvalue);
    }

    function validation() {
        var ans = true;
        if(formvalue.name=="")
        {
            toast.error('Name Field is required');
            ans=false;
            return false;
        }
        if(formvalue.email=="")
        {
            toast.error('email Field is required');
            ans=false;
            return false;
        }
        if(formvalue.password=="")
        {
            toast.error('password Field is required');
            ans=false;
            return false;
        }
        if(formvalue.mobile=="")
        {
            toast.error('mobile Field is required');
            ans=false;
            return false;
        }
        if(formvalue.img=="")
        {
            toast.error('img Field is required');
            ans=false;
            return false;
        }
        return ans;
    }

    const submitHandel = async (e) => {
        e.preventDefault();
        if (validation()) {
            const res = await axios.post(`http://localhost:3000/user`, formvalue);
            console.log(res);
            if (res.status == 201) {
                toast.success('Data Add Success');
                setFormvalue({ ...formvalue, id: "", name: "", email: "", password: "",mobile:"",img:"" });
            }
        }
    }


    return (
        <div>
            <Haeder2 active="nav-item active" />
            <section className="contact_section layout_padding">
                <div className="container px-0">
                    <div className="heading_container ">
                        <h2 className>
                            Signup Us
                        </h2>
                    </div>
                </div>
                <div className="container container-bg">
                    <div className="row">
                      
                        <div className="col-md-12 col-lg-12 px-0">
                            <form action="" method="post" onSubmit={submitHandel}>
                                <div>
                                    <input type="text" name="name" onChange={onChangehandel} value={formvalue.name} placeholder="Name" />
                                </div>
                                <div>
                                    <input type="email" name="email" onChange={onChangehandel} value={formvalue.email} placeholder="Email" />
                                </div>
                                <div>
                                    <input type="password" name="password" onChange={onChangehandel} value={formvalue.password} placeholder="Password" />
                                </div>
                                <div>
                                    <input type="number" name="mobile" onChange={onChangehandel} value={formvalue.mobile} placeholder="Mobile" />
                                </div>
                                <div>
                                    <input type="url" name="img" onChange={onChangehandel} value={formvalue.img} placeholder="Image" />
                                </div>
                               
                                <div className="d-flex ">
                                    <button >
                                        Signup
                                    </button>
                                    <Link to="/login">If you already registered then Login Here</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>

    )
}

export default Signup
import React, { useState } from 'react'
import Haeder2 from '../component/Haeder2'
import Footer from '../component/Footer'
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link,useNavigate } from 'react-router-dom';

function Login() {

    const redirect=useNavigate();

    const [formvalue, setFormvalue] = useState({
        email: "",
        password: "",
    });

    const onChangehandel = (e) => {
        setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
        console.log(formvalue);
    }

    function validation() {
        var ans = true;
      
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
      
        return ans;
    }

    const submitHandel = async (e) => {
        e.preventDefault();
        if (validation()) {
            const res_arr=await axios.get(`http://localhost:3000/user?email=${formvalue.email}`);
            console.log(res_arr);
            if(res_arr.data.length>0)
            {
                if(res_arr.data[0].password==formvalue.password)
                {
                    if(res_arr.data[0].status=="Unblock")
                    {
                        localStorage.setItem('uid',res_arr.data[0].id);
                        localStorage.setItem('uname',res_arr.data[0].name);    

                        toast.success('Login Success');
                        return redirect('/');
                    }
                    else
                    {
                        toast.error('Account Blocked Contact SHOP');
                        setFormvalue({...formvalue,email:"",password:""});
                        return false;
                    }
                }
                else
                {
                    toast.error('Password does not match');
                    setFormvalue({...formvalue,email:"",password:""});
                    return false;
                }
            }
            else
            {
                toast.error('Email does not Exist');
                setFormvalue({...formvalue,email:"",password:""});
                return false;
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
                            Login Us
                        </h2>
                    </div>
                </div>
                <div className="container container-bg">
                    <div className="row">
                      
                        <div className="col-md-12 col-lg-12 px-0">
                            <form action="" method="post" onSubmit={submitHandel}>
                              
                                <div>
                                    <input type="email" name="email" onChange={onChangehandel} value={formvalue.email} placeholder="Email" />
                                </div>
                                <div>
                                    <input type="password" name="password" onChange={onChangehandel} value={formvalue.password} placeholder="Password" />
                                </div>
                              
                                <div className="d-flex ">
                                    <button >
                                        Login
                                    </button>
                                    <Link to="/signup">If you not register then Signup Here</Link>
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

export default Login
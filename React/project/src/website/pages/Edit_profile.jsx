import React, { useState, useEffect } from 'react'
import Haeder2 from '../component/Haeder2'
import Footer from '../component/Footer'
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link, useNavigate, useParams } from 'react-router-dom';

function Edit_profile() {

    const redirect = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('uid')) {
            editdata();
        }
        else {
            redirect('/');
        }
    },[]);

    const [formvalue, setFormvalue] = useState({
        id: "",
        name: "",
        email: "",
        mobile: "",
        img: "",
    });


    const { id } = useParams();
    const editdata = async () => {
        const res = await axios.get(`http://localhost:3000/user/${id}`);
        console.log(res.data);
        setFormvalue(res.data);
    }


    const onChangehandel = (e) => {
        setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
        console.log(formvalue);
    }

    function validation() {
        var ans = true;
        if (formvalue.name == "") {
            toast.error('Name Field is required');
            ans = false;
            return false;
        }
        if (formvalue.email == "") {
            toast.error('email Field is required');
            ans = false;
            return false;
        }

        if (formvalue.mobile == "") {
            toast.error('mobile Field is required');
            ans = false;
            return false;
        }
        if (formvalue.img == "") {
            toast.error('img Field is required');
            ans = false;
            return false;
        }
        return ans;
    }

    const submitHandel = async (e) => {
        e.preventDefault();
        if (validation()) {
            const res = await axios.patch(`http://localhost:3000/user/${id}`, formvalue);
            console.log(res);
            if (res.status == 200) {
                setFormvalue({ ...formvalue, id: "", name: "", email: "", password: "", mobile: "", img: "" });
                redirect('/profile');
                toast.success('Data Update Success');
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
                            Edit Profile
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
                                    <input type="number" name="mobile" onChange={onChangehandel} value={formvalue.mobile} placeholder="Mobile" />
                                </div>
                                <div>
                                    <input type="url" name="img" onChange={onChangehandel} value={formvalue.img} placeholder="Image" />
                                </div>

                                <div className="d-flex ">
                                    <button >
                                        Save
                                    </button>

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

export default Edit_profile
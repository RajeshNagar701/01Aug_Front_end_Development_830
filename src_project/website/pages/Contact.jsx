import React, { useState } from 'react'
import Haeder2 from '../component/Haeder2'
import Footer from '../component/Footer'
import axios from 'axios';
import { toast } from 'react-toastify';

function Contact() {

    const [formvalue, setFormvalue] = useState({
        id: "",
        name: "",
        email: "",
        comment: "",
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
        if(formvalue.comment=="")
        {
            toast.error('comment Field is required');
            ans=false;
            return false;
        }
        return ans;
    }

    const submitHandel = async (e) => {
        e.preventDefault();
        if (validation()) {
            const res = await axios.post(`http://localhost:3000/contacts`, formvalue);
            console.log(res);
            if (res.status == 201) {
                toast.success('Data Add Success');
                setFormvalue({ ...formvalue, id: "", name: "", email: "", comment: "" });
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
                            Contact Us
                        </h2>
                    </div>
                </div>
                <div className="container container-bg">
                    <div className="row">
                        <div className="col-lg-7 col-md-6 px-0">
                            <div className="map_container">
                                <div className="map-responsive">
                                    <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France" width={600} height={300} frameBorder={0} style={{ border: 0, width: '100%', height: '100%' }} allowFullScreen />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-5 px-0">
                            <form action="" method="post" onSubmit={submitHandel}>
                                <div>
                                    <input type="text" name="name" onChange={onChangehandel} value={formvalue.name} placeholder="Name" />
                                </div>
                                <div>
                                    <input type="email" name="email" onChange={onChangehandel} value={formvalue.email} placeholder="Email" />
                                </div>

                                <div>
                                    <input type="text" name="comment" onChange={onChangehandel} value={formvalue.comment} className="message-box" placeholder="Message" />
                                </div>
                                <div className="d-flex ">
                                    <button >
                                        SEND
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

export default Contact
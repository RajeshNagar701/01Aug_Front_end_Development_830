import React,{useState,useEffect} from 'react'
import Haeder2 from '../component/Haeder2'
import Footer from '../component/Footer'
import { Helmet } from 'react-helmet'
import axios from 'axios'
import { Link ,useNavigate} from 'react-router-dom'

function Profile() {
    const redirect=useNavigate();
    useEffect(() => {
        if(!(localStorage.getItem('uid')))
        {
            redirect('/');
        }
        else
        {
            fetch();
        }
    },[]);
    const [data, setData] = useState({});
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/user/${localStorage.getItem('uid')}`);
        console.log(res.data);
        setData(res.data);
    }
    return (
        <div>
            <div>
               <Haeder2/>
                
                <section className="gift_section layout_padding-bottom">
                    <div className="container mt-5">
                        <div className="heading_container heading_center">
                            <h2>
                                My Profile
                            </h2>
                        </div>
                    </div>
                    <div className="box mt-3">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="img_container">
                                        <div className="img-box">
                                            <img src={data.img} alt />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <div className="detail-box">
                                        <div className="heading_container">
                                            <h2>
                                                {data.id}<br />
                                                {data.name}
                                            </h2>
                                        </div>
                                        <p>
                                           {data.email}
                                        </p>
                                        <p>
                                           {data.mobile}
                                        </p>
                                        <div className="btn-box">
                                            <Link to="" className="btn1">
                                                Edit Profile
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
               
                {/* end contact section */}
                
               
               
            </div>

        </div>

    )
}

export default Profile
import React, { useState, useEffect } from 'react'
import Haeder2 from '../component/Haeder2'
import Footer from '../component/Footer'
import axios from 'axios';
import { Link } from 'react-router-dom';

function Shop() {
    useEffect(() => {
        fetch();
    }, []);
    const [data, setData] = useState([]);
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/categories`);
        console.log(res.data);
        setData(res.data);
    }
    return (
        <div>
            <Haeder2 active="nav-item active" />
            <section className="shop_section layout_padding">
                <div className="container">
                    <div className="heading_container heading_center">
                        <h2>
                            Latest Products
                        </h2>
                    </div>
                    <div className="row">
                        {
                            data && data.map((value, index) => {
                                return (
                                    <div className="col-sm-6 col-md-4 col-lg-4">
                                        <div className="box">
                                            <Link to={'/view_shop/'+value.id}>
                                                <div className="img-box">
                                                    <img src={value.cate_img} width="100%" alt />
                                                </div>
                                                <div className="detail-box">
                                                    <h6>
                                                        {value.cate_name}
                                                    </h6>
                                                    
                                                </div>
                                                <div className="new">
                                                    <span>
                                                        New
                                                    </span>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                )
                            })
                        }


                    </div>
                    <div className="btn-box">
                        <a href>
                            View All Products
                        </a>
                    </div>
                </div>
            </section>
            <Footer />
        </div>

    )
}

export default Shop
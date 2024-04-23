import React, { useState, useEffect } from 'react'
import Haeder2 from '../component/Haeder2'
import Footer from '../component/Footer'
import axios from 'axios';
import { useParams } from 'react-router-dom';

function View_shop() {
    useEffect(() => {
        fetch();
    }, []);
    const {cate_id}=useParams();
    const [data, setData] = useState([]);
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/products?cate_id=${cate_id}`);
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
                            View All Product
                        </h2>
                    </div>
                    <div className="row">
                        {
                            data && data.map((value, index) => {
                                return (
                                    <div className="col-sm-6 col-md-4 col-lg-4">
                                        <div className="box">
                                            <a href>
                                                <div className="img-box">
                                                    <img src={value.prod_img} width="100%" alt />
                                                </div>
                                                <div className="detail-box">
                                                    <h6>
                                                        {value.prod_name}
                                                    </h6>
                                                    <h6>
                                                        {value.price}/- Rs
                                                    </h6>
                                                    
                                                </div>
                                            </a>
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

export default View_shop
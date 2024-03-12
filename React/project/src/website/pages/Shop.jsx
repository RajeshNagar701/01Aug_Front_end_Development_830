import React from 'react'
import Haeder2 from '../component/Haeder2'
import Footer from '../component/Footer'

function Shop() {
    return (
        <div>
            <Haeder2 active="nav-item active"/>
            <section className="shop_section layout_padding">
                <div className="container">
                    <div className="heading_container heading_center">
                        <h2>
                            Latest Products
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-md-4 col-lg-3">
                            <div className="box">
                                <a href>
                                    <div className="img-box">
                                        <img src="website/images/p1.png" alt />
                                    </div>
                                    <div className="detail-box">
                                        <h6>
                                            Ring
                                        </h6>
                                        <h6>
                                            Price
                                            <span>
                                                $200
                                            </span>
                                        </h6>
                                    </div>
                                    <div className="new">
                                        <span>
                                            New
                                        </span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                            <div className="box">
                                <a href>
                                    <div className="img-box">
                                        <img src="website/images/p2.png" alt />
                                    </div>
                                    <div className="detail-box">
                                        <h6>
                                            Watch
                                        </h6>
                                        <h6>
                                            Price
                                            <span>
                                                $300
                                            </span>
                                        </h6>
                                    </div>
                                    <div className="new">
                                        <span>
                                            New
                                        </span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                            <div className="box">
                                <a href>
                                    <div className="img-box">
                                        <img src="website/images/p3.png" alt />
                                    </div>
                                    <div className="detail-box">
                                        <h6>
                                            Teddy Bear
                                        </h6>
                                        <h6>
                                            Price
                                            <span>
                                                $110
                                            </span>
                                        </h6>
                                    </div>
                                    <div className="new">
                                        <span>
                                            New
                                        </span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                            <div className="box">
                                <a href>
                                    <div className="img-box">
                                        <img src="website/images/p4.png" alt />
                                    </div>
                                    <div className="detail-box">
                                        <h6>
                                            Flower Bouquet
                                        </h6>
                                        <h6>
                                            Price
                                            <span>
                                                $45
                                            </span>
                                        </h6>
                                    </div>
                                    <div className="new">
                                        <span>
                                            New
                                        </span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                            <div className="box">
                                <a href>
                                    <div className="img-box">
                                        <img src="website/images/p5.png" alt />
                                    </div>
                                    <div className="detail-box">
                                        <h6>
                                            Teddy Bear
                                        </h6>
                                        <h6>
                                            Price
                                            <span>
                                                $95
                                            </span>
                                        </h6>
                                    </div>
                                    <div className="new">
                                        <span>
                                            New
                                        </span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                            <div className="box">
                                <a href>
                                    <div className="img-box">
                                        <img src="website/images/p6.png" alt />
                                    </div>
                                    <div className="detail-box">
                                        <h6>
                                            Flower Bouquet
                                        </h6>
                                        <h6>
                                            Price
                                            <span>
                                                $70
                                            </span>
                                        </h6>
                                    </div>
                                    <div className="new">
                                        <span>
                                            New
                                        </span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                            <div className="box">
                                <a href>
                                    <div className="img-box">
                                        <img src="website/images/p7.png" alt />
                                    </div>
                                    <div className="detail-box">
                                        <h6>
                                            Watch
                                        </h6>
                                        <h6>
                                            Price
                                            <span>
                                                $400
                                            </span>
                                        </h6>
                                    </div>
                                    <div className="new">
                                        <span>
                                            New
                                        </span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                            <div className="box">
                                <a href>
                                    <div className="img-box">
                                        <img src="website/images/p8.png" alt />
                                    </div>
                                    <div className="detail-box">
                                        <h6>
                                            Ring
                                        </h6>
                                        <h6>
                                            Price
                                            <span>
                                                $450
                                            </span>
                                        </h6>
                                    </div>
                                    <div className="new">
                                        <span>
                                            New
                                        </span>
                                    </div>
                                </a>
                            </div>
                        </div>
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
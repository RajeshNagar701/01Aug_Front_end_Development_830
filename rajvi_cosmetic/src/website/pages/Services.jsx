import React from 'react'
import Footer from '../component/Footer'
import Header2 from '../component/Header2'

function Services() {
    return (
        <>
            <Header2 title="Services" />
            <div className="container-fluid px-0 py-5 my-5">
                <div className="row mx-0 justify-content-center text-center">
                    <div className="col-lg-6">
                        <h6 className="d-inline-block bg-light text-primary text-uppercase py-1 px-2">Our Service</h6>
                        <h1>Spa &amp; Beauty Services</h1>
                    </div>
                </div>
                <div className="owl-carousel service-carousel">
                    <div className="service-item position-relative">
                        <img className="img-fluid" src="img/service-1.jpg" alt />
                        <div className="service-text text-center">
                            <h4 className="text-white font-weight-medium px-3">Body Massage</h4>
                            <p className="text-white px-3 mb-3">Elitr labore sit dolor erat est lorem diam sea ipsum diam dolor duo sit ipsum</p>
                            <div className="w-100 bg-white text-center p-4">
                                <a className="btn btn-primary" href>Make Order</a>
                            </div>
                        </div>
                    </div>
                    <div className="service-item position-relative">
                        <img className="img-fluid" src="img/service-2.jpg" alt />
                        <div className="service-text text-center">
                            <h4 className="text-white font-weight-medium px-3">Stone Therapy</h4>
                            <p className="text-white px-3 mb-3">Elitr labore sit dolor erat est lorem diam sea ipsum diam dolor duo sit ipsum</p>
                            <div className="w-100 bg-white text-center p-4">
                                <a className="btn btn-primary" href>Make Order</a>
                            </div>
                        </div>
                    </div>
                    <div className="service-item position-relative">
                        <img className="img-fluid" src="img/service-3.jpg" alt />
                        <div className="service-text text-center">
                            <h4 className="text-white font-weight-medium px-3">Facial Therapy</h4>
                            <p className="text-white px-3 mb-3">Elitr labore sit dolor erat est lorem diam sea ipsum diam dolor duo sit ipsum</p>
                            <div className="w-100 bg-white text-center p-4">
                                <a className="btn btn-primary" href>Make Order</a>
                            </div>
                        </div>
                    </div>
                    <div className="service-item position-relative">
                        <img className="img-fluid" src="img/service-4.jpg" alt />
                        <div className="service-text text-center">
                            <h4 className="text-white font-weight-medium px-3">Skin Care</h4>
                            <p className="text-white px-3 mb-3">Elitr labore sit dolor erat est lorem diam sea ipsum diam dolor duo sit ipsum</p>
                            <div className="w-100 bg-white text-center p-4">
                                <a className="btn btn-primary" href>Make Order</a>
                            </div>
                        </div>
                    </div>
                    <div className="service-item position-relative">
                        <img className="img-fluid" src="img/service-5.jpg" alt />
                        <div className="service-text text-center">
                            <h4 className="text-white font-weight-medium px-3">Stream Bath</h4>
                            <p className="text-white px-3 mb-3">Elitr labore sit dolor erat est lorem diam sea ipsum diam dolor duo sit ipsum</p>
                            <div className="w-100 bg-white text-center p-4">
                                <a className="btn btn-primary" href>Make Order</a>
                            </div>
                        </div>
                    </div>
                    <div className="service-item position-relative">
                        <img className="img-fluid" src="img/service-6.jpg" alt />
                        <div className="service-text text-center">
                            <h4 className="text-white font-weight-medium px-3">Face Masking</h4>
                            <p className="text-white px-3 mb-3">Elitr labore sit dolor erat est lorem diam sea ipsum diam dolor duo sit ipsum</p>
                            <div className="w-100 bg-white text-center p-4">
                                <a className="btn btn-primary" href>Make Order</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center bg-appointment mx-0">
                    <div className="col-lg-6 py-5">
                        <div className="p-5 my-5" style={{ background: 'rgba(33, 30, 28, 0.7)' }}>
                            <h1 className="text-white text-center mb-4">Make Appointment</h1>
                            <form>
                                <div className="form-row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control bg-transparent p-4" placeholder="Your Name" required="required" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input type="email" className="form-control bg-transparent p-4" placeholder="Your Email" required="required" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <div className="date" id="date" data-target-input="nearest">
                                                <input type="text" className="form-control bg-transparent p-4 datetimepicker-input" placeholder="Select Date" data-target="#date" data-toggle="datetimepicker" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <div className="time" id="time" data-target-input="nearest">
                                                <input type="text" className="form-control bg-transparent p-4 datetimepicker-input" placeholder="Select Time" data-target="#time" data-toggle="datetimepicker" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <select className="custom-select bg-transparent px-4" style={{ height: 47 }}>
                                                <option selected>Select A Service</option>
                                                <option value={1}>Service 1</option>
                                                <option value={2}>Service 1</option>
                                                <option value={3}>Service 1</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <button className="btn btn-primary btn-block" type="submit" style={{ height: 47 }}>Make Appointment</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Service End */}


            <Footer />
        </>
    )
}

export default Services
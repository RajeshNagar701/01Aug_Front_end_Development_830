import React from 'react'
import AHeader from '../component/AHeader'
import AFooter from '../component/AFooter'

function Add_services() {
    return (
        <div>
            <AHeader title="Add Services"/>
            < div className="container-fluid" >
                <div className="container">
                    <div className="row">
                        
                        <div className="col-lg-12">
                            <div className="bg-light  p-lg-5 ">
                                <h6 className="d-inline-block text-white text-uppercase bg-primary py-1 px-2">Services</h6>
                                <h1 className="mb-4">Add Services</h1>
                                <div id="success" />
                                <form name="sentMessage" id="contactForm" noValidate="novalidate">
                                    <div className="form-row">
                                        <div className="col-sm-12 control-group">
                                            <select className="form-control border-0" name="cate_id" placeholder="Services Name" required="required" data-validation-required-message="Please enter Service name">
                                                <option value="" selected>-------- Select Categories ---------</option>
                                            </select>    
                                            <p className="help-block text-danger" />
                                        </div>
                                        <div className="col-sm-12 control-group">
                                            <input type="text" className="form-control border-0 p-4" name="name" placeholder="Services Name" required="required" data-validation-required-message="Please enter Service name" />
                                            <p className="help-block text-danger" />
                                        </div>
                                        <div className="col-sm-12 control-group">
                                            <input type="url" className="form-control border-0 p-4" name="ser_img" placeholder="Service Image" required="required" data-validation-required-message="Please Enter Service Image" />
                                            <p className="help-block text-danger" />
                                        </div>
                                        <div className="col-sm-12 control-group">
                                            <input type="number" className="form-control border-0 p-4" name="main_price" placeholder="Main Price" required="required" data-validation-required-message="Please Main Price" />
                                            <p className="help-block text-danger" />
                                        </div>
                                        <div className="col-sm-12 control-group">
                                            <input type="number" className="form-control border-0 p-4" name="dis_price" placeholder="Discounted Price" required="required" data-validation-required-message="Please Discounted Price" />
                                            <p className="help-block text-danger" />
                                        </div>
                                    </div>
                                
                                    <div className="control-group">
                                        <textarea className="form-control border-0 py-3 px-4" name="desc" rows={3} id="message" placeholder="Service Description" required="required" data-validation-required-message="Please enter Service Description" defaultValue={""} />
                                        <p className="help-block text-danger" />
                                    </div>
                                    <div>
                                        <button className="btn btn-primary py-3 px-4" type="submit" id="sendMessageButton">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

            <AFooter />
        </div>
    )
}

export default Add_services
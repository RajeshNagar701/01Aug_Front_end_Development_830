import React from 'react'
import AHeader from '../component/AHeader'
import AFooter from '../component/AFooter'

function Add_categories() {
    return (
        <div>
            <AHeader title="Add Categories"/>
            < div className="container-fluid" >
                <div className="container">
                    <div className="row">
                        
                        <div className="col-lg-12">
                            <div className="bg-light  p-lg-5 ">
                                <h6 className="d-inline-block text-white text-uppercase bg-primary py-1 px-2">Categories</h6>
                                <h1 className="mb-4">Add Categories</h1>
                                <div id="success" />
                                <form name="sentMessage" id="contactForm" noValidate="novalidate">
                                    <div className="form-row">
                                        <div className="col-sm-12 control-group">
                                            <input type="text" className="form-control border-0 p-4" id="name" placeholder="Categories Name" required="required" data-validation-required-message="Please enter Categories name" />
                                            <p className="help-block text-danger" />
                                        </div>
                                        <div className="col-sm-12 control-group">
                                            <input type="url" className="form-control border-0 p-4" id="cate_img" placeholder="Categories Image" required="required" data-validation-required-message="Please enter Categories Images" />
                                            <p className="help-block text-danger" />
                                        </div>
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

export default Add_categories
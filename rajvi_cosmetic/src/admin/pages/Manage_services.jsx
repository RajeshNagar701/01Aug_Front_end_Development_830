import React from 'react'
import AHeader from '../component/AHeader'
import AFooter from '../component/AFooter'

function Manage_services() {
    return (
        <div>
            <AHeader title="Manage Services"/>
            < div className="container-fluid" >
                <div className="container">
                    <div className="row">

                        <div className=" col-lg-12 ">
                            <div className="bg-light  p-lg-5">
                                <h6 className="d-inline-block text-white text-uppercase bg-primary py-1 px-2">Services</h6>
                                <h1 className="mb-4">Manage Services</h1>
                                <div id="success" />

                                <table className="table">
                                    <thead className="table-dark">
                                        <tr>
                                            <th>ID</th>
                                            <th>Categories ID</th>
                                            <th>Service Image</th>
                                            <th>Service Name</th>
                                            <th>Main Price</th>
                                            <th>Discounted Price</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>John</td>
                                            <td>Doe</td>
                                            <td>Doe</td>
                                            <td>john@example.com</td>
                                            <td>John</td>
                                            <td>Doe</td>
                                            <td>
                                                <button className='btn btn-info mr-2'>Edit</button>
                                                <button className='btn btn-danger'>Delete</button>
                                            </td>
                                        </tr>
                                       
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div >

            <AFooter />
        </div>
    )
}

export default Manage_services
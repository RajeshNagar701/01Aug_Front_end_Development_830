import React from 'react'
import Haeder2 from '../component/Haeder2'
import Footer from '../component/Footer'
import { Link } from 'react-router-dom'

function PNF() {
    return (
        <div>
            <Haeder2/>
            <section className="contact_section layout_padding">
                <div className="container px-0">
                    <div className="heading_container ">
                        <h2 className>
                            PNF 
                        </h2>
                    </div>
                </div>
                <div className="container container-bg">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 px-0 mt-5 mb-5">
                                <h1 align="center">Page Not Found</h1>
                                <h2 align="center">404</h2>
                                <div align="center"><Link to="/" className='btn btn-primary'>Back</Link></div>
                        </div>
                        
                    </div>
                </div>
            </section>
            <Footer/>
        </div>

    )
}

export default PNF
import React from 'react'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import { Link } from 'react-router-dom'

function PNF() {
  return (
    <>
    <Header/>
    <div class="container mt-5">
        <div class="row">
            <div class="col-sm-12">
                <h2>Page Not Found</h2>
                <h5>404</h5>
                <Link to='/'>Back</Link>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default PNF
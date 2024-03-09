import React from 'react'
import Header from '../Component/Header'
import Footer from '../Component/Footer'

function About() {
  return (
    <>
    <Header/>
    <div class="container mt-5">
        <div class="row">
            <div class="col-sm-12">
                <h2>About us</h2>
                <h5>Title description, Dec 7, 2020</h5>
                <div class="fakeimg">Fake Image</div>
                <p>Some text..</p>
                <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>

                <h2 class="mt-5">TITLE HEADING</h2>
                <h5>Title description, Sep 2, 2020</h5>
                <div class="fakeimg">Fake Image</div>
                <p>Some text..</p>
                <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default About
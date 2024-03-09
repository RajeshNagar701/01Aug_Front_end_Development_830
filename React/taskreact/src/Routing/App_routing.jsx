/*
Create React App doesn't include page routing.

React Router is the most popular solution.

Add React Router
To add React Router in your application, run this in the terminal from the root directory of the application:

npm i react-router-dom

*/

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './Pages/Home'
import About from './Pages/About'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import PNF from './Pages/PNF'

function App_routing() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/blog" element={<Blog/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
                <Route path="*" element={<PNF/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App_routing
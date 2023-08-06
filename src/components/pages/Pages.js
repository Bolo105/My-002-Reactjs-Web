import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Footer } from "../comun/Footer"
import { Navbar }  from "../comun/Navbar"
import { Home } from "../home/Home" 
import { About } from "./About"
import { Blog } from "./Blog"
import { Contact } from "./Contact"
import { Portfolio } from "./Portfolio"
import { Services } from "./Services"
import { Test2 } from "./Test2"




export const Pages = () => {
    return (
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route  path='/' element={<Home />} />
            <Route  path='/about' element={<About /> } />
            <Route  path='/services' element={<Services />} />
            <Route  path='/portfolio' element={<Portfolio />} />
            <Route  path='/test2' element={<Test2 />} />
            <Route  path='/blog' element={<Blog />} />
            <Route  path='/contact' element={<Contact />} />
          </Routes>
          <Footer />
        </Router>
      </>
    )
  }
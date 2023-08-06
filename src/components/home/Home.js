import React from "react"

import { About } from "../pages/About"
import { Blog } from "../pages/Blog"
import { Contact } from "../pages/Contact"
import { Portfolio } from "../pages/Portfolio"
import { Services } from "../pages/Services"
import { Test2 } from "../pages/Test2"
import { Hero } from "./Hero"  

export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Test2 />
      <Blog />
      <Contact />
    </>
  )
}
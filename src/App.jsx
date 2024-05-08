import { useState } from 'react'
import './App.css'
import Footer from './component/Footer'
import Header from './component/Header'
import Hero from './component/Hero'
import Cards from './component/Cards'
import TimeLine from './component/TimeLine'
import Contact from './component/Contact'
import About from './component/About'
import CSE from './component/CSE'
import Divider from './component/Divider'
import Campus from './component/Campus'
import Login from './component/Login'
import Stats from './component/Stats'

function App() {
  return (
    <>
    <Header/>
    <Hero/>
    <Divider heading="Department Heads"/>
    <Cards/>
    <Login/>
    <Divider heading="IMSEC TimeLine"/>
    <TimeLine/>
    <Divider heading="About IMSEC"/>
    <About/>
    <Divider heading="Sports-Event"/>
    <CSE/>
    <Divider heading="Life@IMSEC"/>
    <Campus/>
    <Divider heading="Stats of IMSEC"/>
    <Stats/>
    <Divider heading="Contact Us"/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App

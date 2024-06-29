import React from 'react'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import {BrowserRouter, Routes, Route} from "react-router-dom"
 
//Pages
import Home from './containers/Home'
import NotFound from './containers/404NotFound'
import Aboutus from './containers/AboutUs'
import PortfolioDetail from './containers/PortfolioDetail'
import Post from './containers/Post'

const App = () => {
  return (
    <>
      <BrowserRouter>

      <Navbar/>
    
      <Routes>
<Route path="/" element={<Home/>}/>
<Route path="*" element={<NotFound/>}/>
<Route path="/aboutus" element={<Aboutus/>}/>
<Route path="/portfolio" element={<PortfolioDetail/>}/>
<Route path="/post" element={<Post/>}/>
      </Routes>


    </BrowserRouter>
    </>
  )
}

export default App
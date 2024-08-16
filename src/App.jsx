import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Landmarks from './Pages/Landmarks'
import Traditional from './Pages/Traditional'
import Festival from './Pages/Festival'
import Insight from './Pages/Insights'
import LocomotiveScroll from 'locomotive-scroll';


const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/landmarks' element={<Landmarks/>}/>
        <Route path='/traditional-art' element={<Traditional/>}/>
        <Route path='/festivals' element={<Festival/>}/>
        <Route path='/insights' element={<Insight/>}/> 
      </Routes>
    </BrowserRouter>
  )
}

export default App
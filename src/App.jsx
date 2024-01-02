import React from 'react'
import TopBar from './components/TopBar'
import All from './components/All'
import Card from './components/Card'
import DataScience from './components/DataScience'
import Careeyer from './components/Careeyer'
import CyberSecurity from './components/CyberSecurity'

import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom'
function App() {
  return <>
  <BrowserRouter>
  <TopBar/>
  <Routes>
    <Route path='/All' element={<All/>}/>
    <Route path='/FullStack' element={<Card/>}/>
    <Route path='/DataScience' element ={<DataScience/>}/>
    <Route path='/Careyer' element ={<Careeyer/>}/>
    <Route path='/CyberSecurity' element ={<CyberSecurity/>}/>
    <Route path='*' element={<Navigate to='/All'/>}/>
  </Routes>
  </BrowserRouter>

  </>
}

export default App
import React from 'react'
import { Routes, Route, Navigate} from "react-router-dom"
import Results from './Results'
import Search from './Search'
const Routes1 = () => {
  return (
   <div className='p-4'>
     <Routes>
   
          <Route path="/" element={<Navigate replace to="/search" />} />
        
   
     
      <Route path="/search" element={<Results />} />
    
     
      <Route path="/images" element={<Results/>} />
    
      <Route path="/news" element={<Results />} />
      
      <Route path="/videos" element={<Results />} />
       
    </Routes> 
     
   </div>
  )
}

export default Routes1
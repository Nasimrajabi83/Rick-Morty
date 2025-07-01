import React from 'react'
import { Outlet } from 'react-router-dom'

function Me() {
  return (
    <div style={{display:'flex'}}>
    <div className=" w3-sidebar w3-bar-block" style={{width:'25%'}}>
        <a href="#" className="w3-bar-item w3-button">Link 1</a>
        <br />
         <a href="#" className="w3-bar-item w3-button">Link 2</a>
         <br />
        <a href="#" className="w3-bar-item w3-button">Link 3</a>
    </div>
     <Outlet/>
     </div>
  )
}

export default Me
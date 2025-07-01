import React from 'react'
import { NavLink } from 'react-router-dom'

function Header () {
  return (
    <div style={{gap:'150px',top:'0px',position:'fixed',display:'flex',height:'100px',width:'100%',alignItems:'center',backgroundColor:'darkblue'}}>
      <NavLink className={({isActive})=>isActive?'Active':'not-active'} to='/' style={{margin:'0px 50px'}}>Home</NavLink>
      <NavLink className={({isActive})=>isActive?'Active':'not-active'} to='/user' style={{margin:'0px 50px'}}>user</NavLink>
      <NavLink className={({isActive})=>isActive?'Active':'not-active'}  to='/product' style={{margin:'0px 50px'}}>product</NavLink>
    </div>
  )
}

export default Header

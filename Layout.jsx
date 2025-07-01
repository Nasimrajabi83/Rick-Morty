import React, { useState } from 'react'
import {  Link, Outlet } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";
import { IoHeartSharp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { MdNoAccounts } from "react-icons/md";
import LayoutProvider, { useLayoutContext } from '../Context/context';

function Layout({children}) {
  const {data,search,setSearch,favorite,like,isfavorite,setSelect,select,islogin,totalState}=useLayoutContext()
  console.log(islogin);
  return (
   
    <div>
       <div style={{gap:'100px',top:'0px',position:'fixed',display:'flex',height:'10vh',width:'100%',alignItems:'center',backgroundColor:'#282f36',left:'0px',justifyContent:'space-between'}}>
        <h1 className='logo'>Rick & Morty</h1>
        <div className='searchbar'>
        <IoSearch  style={{color:'#079238',fontSize:'25px' }}/>
       <input onChange={(e)=>setSearch(e.target.value)} className='search' type='text'placeholder='Search ...' />
        </div>
        {islogin ? (
          <FaUserCircle className='like' style={{color:'#079238',fontSize:'33px',marginRight:'30px' }}/> )
          :
           ( <Link to={'/login'}>
          <MdNoAccounts className='like' style={{color:'#079238',fontSize:'33px',marginRight:'30px' }} />
          </Link> )
        }
        
      <Link to={'/user'}>
        <IoHeartSharp  className='like' style={{color:'#079238',fontSize:'33px',marginRight:'30px' }} />
        </Link>
        </div>
        
    <div className="content">
    <Outlet/>
    </div>
    {/* <div style={{bottom:'0px',left:'0px',height:'10vh',backgroundColor:'#282f36',width:'100%',color:'gray',position:'fixed'}}>
      footer
    </div> */}
    </div>
    
  )
}

export default Layout
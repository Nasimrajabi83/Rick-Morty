import React, { useEffect, useState } from 'react'
import './index.css'
import { FaCircle } from "react-icons/fa";
import { IoHeartSharp } from "react-icons/io5";
import { useLayoutContext } from '../Context/context';
import { Link } from 'react-router-dom';
import { RiHeartAdd2Fill } from "react-icons/ri";

function Home() {
  const {favorite,setSelect,isfavorite,totalState}=useLayoutContext()
  return (
    <div className='mainproduct'>
     
      {totalState.filter&&totalState.filter.map((item)=>(
         
        <div style={{display:'flex',justifyContent:'space-between'}} className='product' key={item.id}>
          <h4 style={{height:'30%',marginLeft:'52px',width:'100%',display:'flex',whiteSpace:'nowrap',marginTop:'10px'}}>{item.name}</h4>
          <Link to={item.id}>
           <img className='img' src={item.image} alt={item.name} />
           </Link>
          
          <br />
          <div className='status'>
          <FaCircle className='circle' style={{color:item.status=='Alive'?'#079238':item.status=='Dead'?'#a93226 ':'gray'}}/>
          <p>{item.status}</p>
          <RiHeartAdd2Fill className='heart' onClick={()=>{favorite(item);setSelect(item)}} color={isfavorite(item.id)?'#079238':'#d7dbdd'} style={{fontSize:'33px',marginLeft:'100px' }}/>
          </div>
        </div>
        

      ))}
   
    </div>
  )
}

export default Home
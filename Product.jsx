import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaCircle } from "react-icons/fa";
import { IoHeartSharp } from "react-icons/io5";
import './index.css'

function Product() {
const { id } = useParams()
const [data, setData] = useState()

useEffect(()=>{
  const getData=async()=>{
    fetch(`http://localhost:3000/Char/${id}`)
    .then(response => response.json())
    .then(json =>setData(json))
    
  }
  getData()
},[])

  return (
    <div className='wrap'> 
     
        <div style={{display:'flex',justifyContent:'space-between'}} className='product' key={data?.id}>
           <img className='img' src={data?.image} alt={data?.name} />
          <h2 style={{height:'30%',margin:'10px',width:'100%',display:'flex',whiteSpace:'nowrap'}}>{data?.name}</h2>
          <br />
          <div className='status'>
          <FaCircle style={{color:data?.status=='Alive'?'#079238':data?.status=='Dead'?'#a93226 ':'gray'}}/>
          <p>{data?.status}</p>
          <IoHeartSharp onClick={()=>{favorite(item);setSelect(item);setOpencanvas(true)}} style={{fontSize:'33px',marginLeft:'100px' }} />
          </div>
        </div>
    
      
    </div>
  )
}

export default Product
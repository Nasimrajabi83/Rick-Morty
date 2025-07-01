import React from 'react'
import { Link } from 'react-router-dom'
import { useLayoutContext } from '../Context/context'
import './index.css'

function User() {
    const { like, select } = useLayoutContext()
  
    return (
      <div className='wrap' style={{display:'flex',backgroundColor:'#0a2736',maxHeight:"100vh",overflowY:"auto",flexWrap:'wrap',gap:'50px'}}>
        {
        like.map((item)=>{
          return(
            <div style={{display:'block',justifyContent:'space-between',height:'450px',width:'350px',border:'1px soled white'}}  key={item.id}>
          <img className='img' style={{marginLeft:'58px'}} src={item.image} alt={item.name} />
          <h2 style={{margin:'10px',width:'100%',display:'flex',whiteSpace:'nowrap',marginLeft:'45px', color:'white'}}>{item.name}</h2>
          <p style={{color:item.status=='Alive'?'#079238':item.status=='Dead'?'#a93226 ':'gray',marginLeft:'130px',fontSize:'25px'}}>{item.status}</p>
          </div>
          )
        })
       
      }
      </div>
       
    )
  }
  
export default User
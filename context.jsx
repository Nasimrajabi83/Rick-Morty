import { createContext, useContext, useEffect, useReducer, useState } from "react";
import Layout from "../Component/Layout";


const LayoutContext= createContext()
const LayoutProvider=({children})=>{
    const [search,setSearch]=useState([])
    const [like,setLike]=useState([])
    const [select,setSelect]=useState(null)
    const [islogin,setIslogin]=useState(false)

  const init={
    data:[],
    filter:[]
  }
const reducer=(state,action)=>{
  switch(action.type){
    case 'AllData':{return {data: action.payload,filter:action.payload}}
    case 'search':{return{data:state.data,filter:action.payload}}
  }
}

    const [totalState,dispatch]=useReducer(reducer,init)
      
    const favorite=(item)=>{
      const exists=like.find((item1)=>item1.id===item.id)
      if(exists){
        setLike(like.filter((item2=>item2.id!==item.id)))
      } else{
        setLike([...like,item])
      }
    }
    const isfavorite=(id)=>{
      return like.some((item)=>item.id===id)
    }
    useEffect(()=>{
        if(search==''){
            dispatch({type:'search',payload:totalState.data})
        } else{
            const Datafilter=totalState.data.filter((item)=>{
                return item?.name?.includes(search)
            })
            dispatch({type:'search',payload:Datafilter})
        }
    },[search])

  useEffect(()=>{
    const getData=async()=>{
      fetch('http://localhost:3000/Char')
      .then(response => response.json())
      .then(json =>{ dispatch({type:'AllData',payload:json})
      })
      
    }
    getData()
  },[])

 

    return( <LayoutContext.Provider
       value={{
      search,
      setSearch,
      like,
      setLike,
      favorite,
      isfavorite,
      select,
      setSelect,
      islogin,
      setIslogin,
     totalState
      }}>
        {children}
    </LayoutContext.Provider>)
}

export default LayoutProvider

export const useLayoutContext =()=>{
return useContext(LayoutContext)
}

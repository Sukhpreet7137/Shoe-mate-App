import React, { useContext, useState } from 'react'
import Card from './Card'
import { UserContext } from '../ContextAPI/UserContext'

const Body = () => {

  const {data1,setdata1,filterdatacategory,filterdatacategory2}=useContext(UserContext);

  return (
    <div className='flex flex-wrap justify-evenly gap-x-3 gap-y-10 w-[1200px]'>
      {
        data1.map((dat)=>{
            return (<Card dat={dat}/>)
        })
      }
    </div>
  )
}

export default Body

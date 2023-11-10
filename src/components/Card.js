import React, { useContext, useState } from 'react'
import { UserContext } from '../ContextAPI/UserContext';
import { AiOutlineHeart } from 'react-icons/ai';
import "../App.css"
import { toast } from 'react-toastify';

const Card = (dat) => {
  
  const {cartarray,setcartarray}=useContext(UserContext);
  function additemtocart(item){
    setcartarray(cartarray=>[...cartarray,item]);
  }

  const showToastMessage = () => {
    toast.success("Added to cart !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };


  return (
    <div className='max-w-[220px] flex flex-col justify-center items-center border-2 rounded-md p-6 max-h-[300px]'>
      <div className='text-3xl relative -top-5 -right-20'><AiOutlineHeart className='outline-none border-none text-red-600'/></div>
      <div className='w-[180px] h-[100px]'>
        <img src={dat?.dat?.img} className='w-full h-full object-contain'/>
      </div>
      <p className='text-center'>{dat?.dat?.title}</p>
      <div className='flex flex-row gap-x-2'>
        <p>{dat?.dat?.reviews}</p>
      </div>
      <div className='flex flex-row gap-x-2'>
        <p className=' line-through'>{dat?.dat?.prevPrice}</p>
        <p>{dat?.dat?.newPrice}</p>
      </div>
      <div>
        <button onClick={()=>{additemtocart(dat); showToastMessage()}} className='cursor-pointer bg-black text-white px-3 py-1 font-semibold text-xl rounded-md'>Add to cart</button>
      </div>
    </div>
  )
}

export default Card;

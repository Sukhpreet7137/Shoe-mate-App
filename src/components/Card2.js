import React, { useContext } from 'react'
import Header from './Header';
import {MdOutlineCancel} from 'react-icons/md'
import { UserContext } from '../ContextAPI/UserContext';

const Card2 = (item) => {

    const {cartarray,setcartarray,clearfilter}=useContext(UserContext);
    function clearitem(content){
        setcartarray(clearfilter(content));
    }
  return (

    <div>
        <div className='flex flex-row justify-center items-center border-b-2 rounded-md p-6 max-h-[350px] gap-x-10'>
        <div><MdOutlineCancel className=' text-red-600 text-2xl relative -top-24 -right-[660px]' onClick={()=>clearitem(item)}/></div>
        <div className='w-[180px] h-[100px]'>
            <img src={item?.dat?.dat?.img} className='w-full h-full object-contain'/>
        </div>
        <p className='text-center'>{item?.dat?.dat?.title}</p>
        <div className='flex flex-row gap-x-2'>
            <p>{item?.dat?.dat?.reviews}</p>
        </div>
        <div className='flex flex-row gap-x-2'>
            <p className=' line-through'>{item?.dat?.dat?.prevPrice}</p>
            <p>{item?.dat?.dat?.newPrice}</p>
        </div>
        </div>
    </div>
  )
}

export default Card2

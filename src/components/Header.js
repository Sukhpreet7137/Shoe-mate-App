import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { AiOutlineHeart } from 'react-icons/ai'
import {BiUserCircle} from 'react-icons/bi'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div>
      <div className='flex flex-row justify-between shadow-lg  pb-5 fixed top-0 w-full z-100 bg-gray-500 pt-3'>
        <div className='pl-10'>
            <input placeholder=' Search Product & Brands' className='text-md outline-none border-b-2 rounded-full px-4 mt-2 py-2'/>
        </div>   
        <Link to="/">
          <div className='text-3xl font-bold font-sans text-white mt-2'>SHOE Mate</div>
        </Link>
        <div className='flex flex-row justify-evenly gap-x-5 pr-10 mt-2'>
            <span className='text-3xl text-white'><AiOutlineHeart/></span>
            <Link to="/cart">
               <span className='text-3xl text-white'><AiOutlineShoppingCart/></span>
            </Link>
            <span className='text-3xl text-white'><BiUserCircle/></span>
        </div>
      </div>
    </div>
  )
}

export default Header

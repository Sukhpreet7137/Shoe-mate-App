import React, { useContext } from 'react'
import { UserContext } from '../ContextAPI/UserContext';

const Sidebar = () => {

  const {data1,setdata1,filterdatacategory,filterdatacategory2,filterprice}=useContext(UserContext);  
  function clickhandler(category){
    setdata1(filterdatacategory(category));
  }

  function clickhandler2(colorcat){
    setdata1(filterdatacategory2(colorcat));
  }
  function clickhandler3(range1,range2){
    setdata1(filterprice(range1,range2));
  }
  return (
    <div className='flex flex-col gap-y-10 pl-16 w-[220px] shadow-lg mr-6 h-screen'>
        <div>
            Category
            <div>
                <div className='flex flex-row place-items-baseline'><button className='cursor-pointer mr-1 w-3 h-3 rounded-full flex justify-center items-center border-black border focus:bg-green-600' onClick={()=>clickhandler("all")}></button>All</div>
                <div className='flex flex-row place-items-baseline'><button className='cursor-pointer mr-1 w-3 h-3 rounded-full flex justify-center items-center border-black border focus:bg-green-600' onClick={()=>clickhandler("sneakers")}></button>Sneakers</div>
                <div className='flex flex-row place-items-baseline'><button className='cursor-pointer mr-1 w-3 h-3 rounded-full flex justify-center items-center border-black border focus:bg-green-600' onClick={()=>clickhandler("flats")}></button>Flats</div>
                <div className='flex flex-row place-items-baseline'><button className='cursor-pointer mr-1 w-3 h-3 rounded-full flex justify-center items-center border-black border focus:bg-green-600' onClick={()=>clickhandler("heels")}></button>Heels</div>
                <div className='flex flex-row place-items-baseline'><button className='cursor-pointer mr-1 w-3 h-3 rounded-full flex justify-center items-center border-black border focus:bg-green-600' onClick={()=>clickhandler("flats")}></button>Sandals</div>
            </div>
        </div>
        <div>
            Price
            <div>
                <div className='flex flex-row place-items-baseline'><button className='cursor-pointer mr-1 w-3 h-3 rounded-full flex justify-center items-center border-black border focus:bg-green-600' onClick={()=>clickhandler3(-1,-1)}></button>All</div>
                <div className='flex flex-row place-items-baseline'><button className='cursor-pointer mr-1 w-3 h-3 rounded-full flex justify-center items-center border-black border focus:bg-green-600' onClick={()=>clickhandler3(0,50)}></button>$0-50</div>
                <div className='flex flex-row place-items-baseline'><button className='cursor-pointer mr-1 w-3 h-3 rounded-full flex justify-center items-center border-black border focus:bg-green-600' onClick={()=>clickhandler3(50,100)}></button>$50-100</div>
                <div className='flex flex-row place-items-baseline'><button className='cursor-pointer mr-1 w-3 h-3 rounded-full flex justify-center items-center border-black border focus:bg-green-600' onClick={()=>clickhandler3(100,150)}></button>$100-150</div>
                <div className='flex flex-row place-items-baseline'><button className='cursor-pointer mr-1 w-3 h-3 rounded-full flex justify-center items-center border-black border focus:bg-green-600' onClick={()=>clickhandler3(150,100000)}></button>Over $150</div>
            </div>
        </div>
        <div>
            Colors
            <div>
                <div className='flex flex-row place-items-baseline'><button className='cursor-pointer mr-1 w-3 h-3 rounded-full flex justify-center items-center border-black border focus:bg-green-600' onClick={()=>clickhandler2("")}></button>All</div>
                <div className='flex flex-row place-items-baseline'><button className='cursor-pointer mr-1 w-3 h-3 rounded-full flex justify-center items-center border-black border focus:bg-green-600' onClick={()=>clickhandler2("black")}></button>Black</div>
                <div className='flex flex-row place-items-baseline'><button className='cursor-pointer mr-1 w-3 h-3 rounded-full flex justify-center items-center border-black border focus:bg-green-600' onClick={()=>clickhandler2("blue")}></button>Blue</div>
                <div className='flex flex-row place-items-baseline'><button className='cursor-pointer mr-1 w-3 h-3 rounded-full flex justify-center items-center border-black border focus:bg-green-600' onClick={()=>clickhandler2("red")}></button>Red</div>
                <div className='flex flex-row place-items-baseline'><button className='cursor-pointer mr-1 w-3 h-3 rounded-full flex justify-center items-center border-black border focus:bg-green-600' onClick={()=>clickhandler2("green")}></button>Green</div>
                <div className='flex flex-row place-items-baseline'><button className='cursor-pointer mr-1 w-3 h-3 rounded-full flex justify-center items-center border-black border focus:bg-green-600' onClick={()=>clickhandler2("white")}></button>White</div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar

import React from 'react'
import { FaSearch } from "react-icons/fa";
import { BiLogOutCircle } from "react-icons/bi";

function Logout() {
  return (
    <div className=" h-[10vh]">
     <BiLogOutCircle className='text-5xl text-white hover:bg-slate-700 duration 300 cursor-pointer rounded-full p-2' /> 
    </div> 
 
  )
}

export default Logout
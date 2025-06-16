import React from 'react'
import {IoSend} from "react-icons/io5"
function Typesend() {
  return (
   
      <div className="flex space-x-2 h-[8vh] text-center bg-gray-800">
        <div className=" w-[60%]  mx-4">
          <input
            type="text"
            placeholder="Type here "
           
            className="border border-gray-700 text-white bg-black rounded-xl outline-none px-4 py-3 w-full"
          />
        </div>
       <button>
        <IoSend className="text-3xl "/>
       </button>
      </div>
  );
}

export default Typesend
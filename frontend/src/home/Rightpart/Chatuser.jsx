import React from 'react'

function Chatuser() {
  return (
    <div className='flex space-x-3 items-center justify-center bg-gray-800 hover:bg-gray-700 duration-300'>
      <div className="avatar avatar-online mt-4">
  <div className="w-16 rounded-full overflow-hidden ">
    <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
  </div>
</div>
<div>
  <h1 className='text-xl text-white'>Anupam</h1>
  <span className='text-white text-sm'>anu@gmail.com</span>
</div>
    </div>
  )
}

export default Chatuser
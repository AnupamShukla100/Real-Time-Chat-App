import React from 'react'

function User() {
  return (
    <div className='flex space-x-4 px-8 py-3 hover:bg-slate-700 duration-300 cursoor-pointer'>
   
    <div className="avatar online mt-4">
      <div className="w-12 rounded-full overflow-hidden">
        <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
      </div>
    </div>
    <div className='mt-3 w-0.5'>
      <h1 className='font-bold'>Anupam</h1>
      <spam>anupam@gmail.com</spam>
    </div>
  </div>
  )
}

export default User
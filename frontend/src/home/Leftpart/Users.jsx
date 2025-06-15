import React from 'react'

function Users() {
  return (
    <div>
    <h1 className="px-8 py-2 mt-8 text-white font-semibold bg-slate-800 rounded-md">
      Messaging
    </h1>
  
    {/* Avatar with online indicator */}
    <div className="avatar online mt-4">
      <div className="w-24 rounded-full overflow-hidden">
        <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
      </div>
    </div>
  </div>
  
  
  )
}

export default Users
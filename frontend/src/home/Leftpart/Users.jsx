import React from 'react'
import User from './User'

function Users() {
  return (
    <div>
    <h1 className="px-8 py-2 mt-8 text-white font-semibold bg-slate-800 rounded-md">
      Messaging
    </h1>
    <div className=" py-2 overflow-y-auto" style={{ maxHeight:"calc(82vh - 10vh)" }}>
      <User/>
       <User/>
       <User/>
       <User/>
       <User/>
       <User/>
       <User/>
       <User/>
       <User/>
       <User/>
       <User/>
       <User/>
       <User/>
    </div>
  </div>
  
  
  )
}


export default Users
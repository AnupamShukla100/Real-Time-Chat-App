import React from 'react'
import Chatuser from './Chatuser'
import Messages from './Messages'
import Typesend from './Typesend'


function Right() {
  return (
    <div className="w-[70%] border border-white bg-slate-900"><Chatuser/>
    <div className="flex-1 overflow-y-auto" style={{ maxHeight:"calc(92vh - 8vh)" }}>
      <Messages/>
      
    </div>
    <Typesend/>
    </div>
  )
}

export default Right
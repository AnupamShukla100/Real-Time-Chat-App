import React from 'react'

function Message() {
  return (
    <div>
      <div>
      <div className="chat chat-start">
  <div className="chat-bubble chat-bubble-info bg-amber-300 w-fit">Calm down, Anakin.</div>
</div>
<div className="chat chat-end">
  <div className="chat-bubble chat-bubble-warning bg-red-300 w-fit">To be on the Council at your age.</div>
</div>
<div className="space-y-4 p-4 bg-gray-900 min-h-screen">
  {/* Info Message */}
  <div className="chat chat-end">
    <div className="chat-bubble chat-bubble-info text-yellow-400">Hey there! This is an info message.</div>
  </div>
      </div>


    </div>
    </div>
  )
}

export default Message
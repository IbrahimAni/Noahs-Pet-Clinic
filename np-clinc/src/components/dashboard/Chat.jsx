import React from 'react'

function Chat() {
  return (
    <div className='chat-container'>
        <div className='chat-reciver-information-container'>
             <div className='reciver-profile-pic'>

             </div>
             <div className='reciver-other-profile'>
                <p>Converstion with Dr. Russell John</p>
             </div>
        </div>
        <div className='chat-main-display'>

            <div className='chat-input-container'>
                <input type='text'/>
            </div>
        </div>
        
    </div>
  )
}

export default Chat
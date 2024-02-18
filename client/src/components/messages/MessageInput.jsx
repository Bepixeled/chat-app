import React from 'react'

const MessageInput = () => {
  return (
    <div>
        <div className='px-4 py-2'>
            <input
            type='text'
            placeholder='Type a message'
            className='w-full mx-2 p-2 rounded-xl shadow-md shadow-black text-lkeppel-700 bg-dcharcoal-400 focus:outline-none'
            />
        </div>
    </div>
  )
}

export default MessageInput
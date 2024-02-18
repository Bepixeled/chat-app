import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'


// Import the NoChatSelected component

const MessageContainer = () => {
    const noMessageSelected = false;

    return (
        <div className='md:min-w-[450px] lg:min-w-[550px] flex flex-col'>
            {noMessageSelected ? (
                <NoChatSelected /> // Replace <noChatSelected /> with <NoChatSelected />
            ) : (
                <>
                    <div className='px-4 py-2 mb-2'>
                        <span className='label-text'>To:</span>
                        <span className='text-white font-bold'> Username</span>
                    </div>
                    <Messages />
                    <MessageInput />
                </>
            )}
        </div>
    );
};



const NoChatSelected = () => {
    return (
        <div className='flex-1 flex items-center justify-center'>
            <div className='flex flex-col gap-4 items-center'>
        <p className='text-xl'>Hi Username! 👋</p>
        <p className='text-white'>Select a conversation to start messaging</p></div>
        </div>
    )
    }
    
    export default MessageContainer
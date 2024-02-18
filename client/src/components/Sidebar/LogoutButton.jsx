import React from 'react'
import * as Unicons from '@iconscout/react-unicons';

const LogoutButton = () => {
  return (
    <div>
        <button className="flex justify-center items-center tooltip" data-tip="Logout"><Unicons.UilSignout size={18} /></button>
    </div>
  )
}

export default LogoutButton
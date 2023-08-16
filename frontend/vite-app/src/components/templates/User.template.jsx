import React from 'react'
import NavbarUser from '../organism/NavbarUser/NavbarUser.organism'
import { Outlet } from 'react-router-dom'

function UserTemplate() {
  return (
    <div>
        <NavbarUser />
        <Outlet />
    </div>
  )
}

export default UserTemplate
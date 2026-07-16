import React from 'react'
import { logout } from '../utils/Logout'

const Navbar = () => {
  return (
    <nav>
        <button onClick={logout} className="w-full bg-red-500 hover:bg-red-600 p-3 rounded-lg">logout</button>
    </nav>
  )
}

export default Navbar

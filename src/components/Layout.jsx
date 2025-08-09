import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'


const Layout = () => {
  return (
    <div>
        <Navbar />
        <div className="flex">
            <Sidebar />
            <main className='flex-1 p-4 ml-60 mt-16'>
                <Outlet />
            </main>
        </div>
    </div>
  )
}

export default Layout
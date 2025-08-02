import React from 'react'
import {Home , User , Bell , Settings} from 'lucide-react'

const Sidebar = () => {


    const sidebarLinks = [
        {text : 'Home' , icon : <Home />, link : '/'},
        {text : 'Profile' , icon : <User /> , link : '/profile' },
        {text : 'Notifications' , icon : <Bell /> , link: '/notification'},
        {text : 'Settings' , icon : <Settings /> , link : '/settings'}
    ]

  return (
    <div className='w-60 h-screen p-4 pt-8 fixed top-12 left-0 border-r border-gray-100 '>
        <ul>
           {
            sidebarLinks.map(item => (
                <li className='flex items-center gap-8 py-2'>
                    {item.icon}
                    <span>{item.text}</span>
                </li>
            ))
           }
        </ul>
    </div>
  )
}

export default Sidebar
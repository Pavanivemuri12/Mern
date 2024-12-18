import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminLeftBar = () => {
  const Linksdata = [
    {
      title: 'Dashboard',
      path: '/admin/dashboard'
  },
  {
      title: 'Products',
      path: '/admin/products'
  },
  {
    title: 'Orders',
    path: '/admin/orders'
},
{
  title:'Users',
  path:'/admin/users'
},
  {
    title: 'Settings',
    path:'/admin/settings'
  }
]
  return (
    <div className='w-full h-screen  shadow-md  shadow-purple-400 flex justify-center items-center'>
    <div className='h-full w-full flex flex-col '>
      <div className='h-[10%] w-full text-purple-700 flex justify-center font-bold text-2xl items-center'>
        Max Store
      </div>
      <div className='h-[80%] w-full flex flex-col items-center'>
        {Linksdata.map((link,index) =>(
          <NavLink to={link.path} key={index} className='h-[10%] w-full px-8 hover:bg-purple-500/90 hover:text-white font-bold flex justify-start items-center rounded-sm shadow-md'>
            {link.title}
          </NavLink>
        ))
        }
        
      </div>
      <div className='h-[10%] w-full flex items-end text-red-600 font-bold '>
        <div className='h-[70%] w-full px-8 hover:bg-red-500 hover:text-white flex justify-start items-center rounded-sm shadow-md'>
        Logout
          </div>
        </div>
       </div>
    </div>
  
  )
}

export default AdminLeftBar
//admin/dashboard
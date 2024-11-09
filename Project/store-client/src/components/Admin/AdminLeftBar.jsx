import React from 'react'

const AdminLeftBar = () => {
  const Linksdata = {
    {
      title: 'Home',
      path: '/'
  },
  {
      title: 'Products',
      path: '/products'
  },
  {
      title: 'Contact',
      path: '/contact'
  }

  }
  return (
    <div className='w-full h-full shadow-md  shadow-purple-400 flex justify-center items-center'>
    <div className='h-full w-full flex flex-col'>
      <div className='h-[10%] w-full  text-purple-500 flex justify-center font-bold text-2xl'>
        Max Store
      </div>
      <div className='h-[80%] w-full flex flex-col items-center'>
        links
      </div>
       </div>
    </div>
  
  )
}

export default AdminLeftBar
//admin/dashboard
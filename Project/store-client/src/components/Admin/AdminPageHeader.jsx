import React from 'react'

const AdminPageHeader = ({title}) => {
  return (
    <div className='h-16 w-10 flex justify-start items-center text-[1.5rem] font-bold text-purple-600'>
        {title}
    </div>
  )
}

export default AdminPageHeader
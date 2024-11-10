import React from 'react'
import AdminPageHeader from '../../components/Admin/AdminPageHeader'
import { Loader2, Pencil, Trash, TriangleAlert } from 'lucide-react' 
const AdminUsers = () => {
  return (
    <div className='w-full h-full flex flex-col justify-start items-start'>
      <AdminPageHeader title='Users'/>
      <table className='w-full h-full border-collapse border shadow-lg rounded-md'>
        <thead className='shadow-sm font-bold text-purple-500 text-left'>
          <tr>
            <th className='p-6'>Name</th>
            <th className='p-6'>Email</th>
            <th className='p-6'>Phone</th>
           
          </tr>
        </thead>
        <tbody>
        <tr >
                <td className='p-6'>Pavani</td>
                <td className='p-6'>pav@gmail.com</td>
                <td className='p-6'>9866425426</td>
        
                <td className='p-6 flex h-full w-full flex-row justify-start items-center gap-4'>
                  <button className='h-15 w-15 border-blue-500 border-2 p-1 rounded-md text-blue-500 shadow-md
               hover:bg-blue-500 hover:text-white hover:shadow-blue-500'>
                  <Pencil />
                  </button>
                  <button className='h-15 w-15 border-red-500 border-2 p-1 rounded-md text-red-500 shadow-md
               hover:bg-red-500 hover:text-white hover:shadow-red-500'>
                                       <Trash />
                  </button>
                </td>
              </tr>
              <tr>
            <td className='p-6'>Asma</td>
            <td className='p-6'>Asma@gmail.com</td>
            <td className='p-6'>987654321</td>

            <td className='p-6 flex h-full w-full flex-row justify-start items-center gap-4'>
              <button className='h-15 w-15 border-blue-500 border-2 p-1 rounded-md text-blue-500 shadow-md
               hover:bg-blue-500 hover:text-white hover:shadow-blue-500'>
                  <Pencil />
              </button>
              <button className='h-15 w-15 border-red-500 border-2 p-1 rounded-md text-red-500 shadow-md
               hover:bg-red-500 hover:text-white hover:shadow-red-500'>
                                  <Trash />
              </button>
            </td>
          </tr>
          </tbody>
          </table> 
    </div>
  )
}

export default AdminUsers
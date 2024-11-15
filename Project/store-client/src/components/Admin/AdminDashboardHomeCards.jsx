import React from 'react'
import { ShoppingBag,ShoppingBasket, ShoppingCart, Users} from 'lucide-react'

const AdminDashboardHomeCards = ({products,orders,users}) => {
  return (
<>
<div className='w-full flex flex-row justify-center items-center gap-5'>
    <div className='w-60 h-[10vh] flex flex-row justify-center items-center px-2 shadow-md rounded-md hover:shadow'>
<div className='w-[70%] h-full flex flex-col justify-center items-start'>
  <p className='text-3xl font-bold'>
    {users}
  </p>
  <p className='text-sm font-semibold px-1'>
    Users
  </p>
</div>
<div className='w-[30%] h-full flex justify-center items-center'>
    <Users className='w-9 h-9 text-purple-700'/>
   


</div>
    </div>

    <div className='w-60 h-[10vh] flex flex-row justify-center items-center px-2 shadow-md rounded-md hover:shadow'>
<div className='w-[70%] h-full flex flex-col justify-center items-start'>
  <p className='text-3xl font-bold'>
   {products}
  </p>
  <p className='text-sm font-semibold px-1'>
    Products
  </p>
</div>
<div className='w-[30%] h-full flex justify-center items-center'>
    <ShoppingBasket className='w-9 h-9 text-purple-700'/> 
   
</div>
    </div>



    <div className='w-60 h-[10vh] flex flex-row justify-center items-center px-2 shadow-md rounded-md hover:shadow'>
<div className='w-[70%] h-full flex flex-col justify-center items-start'>
  <p className='text-3xl font-bold'>
    {orders}
  </p>
  <p className='text-sm font-semibold px-1'>
    Orders
  </p>
</div>
<div className='w-[30%] h-full flex justify-center items-center'>
    <ShoppingBag className='w-9 h-9 text-purple-700' /> 
   
</div>
    </div>

    <div className='w-60 h-[10vh] flex flex-row justify-center items-center px-2 shadow-md rounded-md hover:shadow'>
<div className='w-[70%] h-full flex flex-col justify-center items-start'>
  <p className='text-3xl font-bold'>
    100
  </p>
  <p className='text-sm font-semibold px-1'>
    Cart
  </p>
</div>
<div className='w-[30%] h-full flex justify-center items-center'>
     <ShoppingCart className='w-9 h-9 text-purple-700'/> 
   
</div>
    </div>


</div>
</>
  )
}

export default AdminDashboardHomeCards


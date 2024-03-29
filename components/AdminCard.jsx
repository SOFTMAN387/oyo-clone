import React from 'react'
import Link from "next/link";
import { useSelector } from 'react-redux';
import { useRouter } from "next/router";
const AdminCard = () => {
  const router = useRouter();
  const authUser= useSelector((state) => state.currentUser[0]) || [];
  if (authUser?.emailExists?.role==="admin"){
    return (
   <>
    <div className='text-center mt-2'>
      <Link href="/"><h1 className="font-bold text-xl  line-clamp-1">Admin Dashboard</h1></Link>
    
  </div>
   <div className="grid sm:grid-cols-3">
       <div className=" rounded-lg h-auto bg-red-300 sm:w-auto justify-center items-center cursor-pointer border-2 border-full border-red-500 rounded-md m-5">
        <Link href="/admin/hotellist">
        <div className="flex justify-center items-center">
             <div  className=" flex flex-col justify-center items-center sm:w-50 w-60 mt-2 h-40 md:w-96">
              <h1 className="font-bold text-xl  line-clamp-1">Lodges</h1>
              <p>200+</p>
             </div>
             </div>
        </Link>
            
      </div>
      <div className=" rounded-lg bg-orange-200	 h-auto sm:w-auto justify-center items-center cursor-pointer border-2 border-full border-red-500 rounded-md m-5">
      <Link href="/admin/orderslist">
        <div className="flex justify-center items-center">
             <div  className=" flex flex-col justify-center items-center sm:w-50 w-60 mt-2 h-40 md:w-96">
              <h1 className="font-bold text-xl  line-clamp-1">Orders</h1>
              <p>3000+</p>
             </div>
             </div>
        </Link>
      </div>
      <div className=" rounded-lg bg-amber-200	 h-auto sm:w-auto justify-center items-center cursor-pointer border-2 border-full border-red-500 rounded-md m-5">
      <Link href="/admin">
        <div className="flex justify-center items-center">
             <div  className=" flex flex-col justify-center items-center sm:w-50 w-60 mt-2 h-40 md:w-96">
              <h1 className="font-bold text-xl  line-clamp-1">Customers</h1>
              <p>250+</p>
             </div>
             </div>
        </Link>
      </div>
   </div>
   </>
  )
  }
  else{
    alert("Sorry ! You are not Admin..");
    router.push("/");
  }
 
}

export default AdminCard
import React from 'react'
import AdminCard from '@/components/AdminCard';
import Image from "next/image";
const orderslist = ({orders}) => {
  return (
   <>
   <AdminCard />
    <span className='w-40 ml-2 mt-5 h-14'>Total Orders {orders?.length}</span>
      <div className='text-right m-2'>
      <button className=" w-40 text-white h-14 rounded-lg bg-blue-400 text-lg">
        Add New        
    </button>
      </div>
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 w-full" >
            <tr>
                <th scope="col" className="px-6 py-3">
                     # Booking ID
                </th>
                <th scope="col" className="px-6 py-3">
                     # User ID
                </th>
                <th scope="col" className="px-6 py-3">
                     # Hotel ID
                </th>
                <th scope="col" className="px-6 py-3">
                     Hotel
                </th>
                <th scope="col" className="px-16 py-3">
                   CheckIn From
                </th>
                <th scope="col" className="px-6 py-3">
                    Members
                </th>
                <th scope="col" className="px-6 py-3">
                  Price By Days
                </th>
                <th scope="col" className="px-6 py-3">
                   Total Amount
                </th>
                <th scope="col" className="px-6 py-3">
                   Availability
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
        {orders?.map((e) => {
                return (
                    <tr className="bg-white border-b  dark:border-gray-700 hover:bg-red-500 dark:hover:bg-gray-200" key={e?.id}>
                        
                    <td  className="px-6 py-4 font-semibold text-gray-900 ">
                        ...{e?._id.slice(-5)}
                    </td>
                    <td  className="px-6 py-4 font-semibold text-gray-900 ">
                        ...{e?.userId?.slice(-5)}
                    </td>
                    <td  className="px-6 py-4 font-semibold text-gray-900 ">
                        ...{e?.userHoteldata?._id.slice(-5)}
                    </td>
                    <td className="p-4">
                        <Image src={e?.userHoteldata?.banner} className="w-16 md:w-32 max-w-full max-h-full" 
                         width={300}
                         height={300} alt="Apple Watch" />
                         <span>{e?.userHoteldata?.name}</span>
                    </td>
                    <td  className="px-6 py-4 font-semibold text-gray-900 ">
                       <span>{e?.bookingDate}</span> to <span>{e?.leavingDate}</span>
                    </td>
                    <td  className="px-6 py-4 font-semibold text-gray-900 ">
                       <span>Male:{e?.male}</span>,<span>Female{e?.female}</span>,<span>Child{e?.child}</span>
                    </td>
                    <td  className="px-6 py-4 font-semibold text-gray-900 ">
                    {e?.userHoteldata?.price}
                    </td>
                    <td  className="px-6 py-4 font-semibold text-gray-900 ">
                    {e?.totalAmount}
                    </td>
                    <td className="px-6 py-4">
                    <div className="flex items-center">
                    {String(e?.userHoteldata?.availability)==="true"?<div className="h-2.5 w-2.5 rounded-full  bg-green-500 me-2"><span className='ml-5'> Available</span></div>:
                    <div className="h-2.5 w-2.5 rounded-full bg-red-500 me-2"><span className='ml-5'>Not Available</span></div>}
                        
                    </div>
                </td>
                <td className="px-6 py-4 flex text-center align-center mt-2 ">
                        <a href="#" className="font-medium text-red-600 dark:text-green-500 hover:underline">Edit</a>
                        <a href="#" className="font-medium ml-2 text-red-600 dark:text-red-500 hover:underline">Delete</a>
                 </td>

                    {/* 
                    <td className="px-6 py-4 font-semibold text-gray-900 ">
                       {e?.name}
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900 ">
                    &#8377; {e?.price}
                    </td>
                    <td className="px-6 py-4 flex text-center align-center mt-2 ">
                        <a href="#" className="font-medium text-red-600 dark:text-green-500 hover:underline">Edit</a>
                        <a href="#" className="font-medium ml-2 text-red-600 dark:text-red-500 hover:underline">Delete</a>
                    </td> */}
                </tr>
                );
              })}
           
           
           
        </tbody>
    </table>
</div>

   </>
  )
}

export default orderslist;


export async function getServerSideProps() {
    const res = await fetch(
      `${process.env.BASE_URL}/api/orders/orderslist`
    );
    const data = await res.json();
  
    return {
      props: {
        orders:data.Orders||null,
      },
    };
  }




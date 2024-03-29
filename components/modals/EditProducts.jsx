import axios from 'axios';
import { useRouter } from "next/router";
import React from 'react'
import Image from 'next/image';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const EditProducts = ({setEditToggle,HotelIdData}) => {
    const router = useRouter();
    const [hotelUpdateData,setHotelUpdateData]=useState(HotelIdData);

    // console.log(HotelIdData);
    const EditHotelInput=(e)=>{
        e.preventDefault();
        setHotelUpdateData({...hotelUpdateData, [e.target.name]: e.target.value });

    }
    console.log(hotelUpdateData);
    const updateHotel=async(id)=>{
        try {
            if(id){
                const updateData=await axios.put(`/api/hotels/update`,hotelUpdateData);
                if(updateData.status===200){
                    setEditToggle(false);
                    toast("Hotel Updated Successfull !.");
                    router.push("/admin/hotellist");
                }
            }else{
                console.log("No Id is Found !");
            }
            
        } catch (error) {
            console.log(error);
        } 
    }
  return (
   <>
    <div  className=" overflow-y-auto overflow-x-auto ml-center mt-5 z-50 justify-center items-center w-[800px] md:inset-0 h-[calc(100%-2rem)] max-h-full">
    <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
          />
    <div className="relative p-4 w-full max-w-x-lg max-h-full">
        {/* <!-- Modal content --> */}
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-100">
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-dark" >
                    Edit Product
                </h3>
                <button type="button" onClick={()=>setEditToggle(false)} className="text-gray-100 bg-red-500 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-red-600 dark:hover:text-white">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only" >Close modal</span>
                </button>
            </div>
            {/* <!-- Modal body --> */}
            <div className="p-4 md:p-5">
                <div className="grid gap-4 mb-4 grid-cols-2">
                    <div className="col-span-2">
                        <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">Name</label>
                        <input onChange={EditHotelInput}  type="text" name="name" id="name" value={hotelUpdateData?.name} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required="" />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                        <label for="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">Price</label>
                        <input onChange={EditHotelInput} type="number" name="price" id="price" value={hotelUpdateData?.price} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required="" />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                    <label for="location" className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">Location</label>
                        <input onChange={EditHotelInput} type="text" name="location" id="location" value={hotelUpdateData?.location} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter City Name" required="" />
                    </div>
                    
                    <div className="col-span-2 sm:col-span-1">
                        <label for="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">Availability</label>
                        <select onChange={EditHotelInput} id="category" name="availability" value={hotelUpdateData?.availability} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500">
                            <option >true</option>
                            <option >false</option>
                            
                        </select>
                    </div>
                    
                    <div className="col-span-2">
                        <label for="banner" className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">
                        <Image
                            src={hotelUpdateData?.banner}
                            alt="avatar"
                            className="relative inline-block object-cover object-center w-12 h-12 rounded-lg"
                            width={50}
                            height={50}
                        
                        />
                        Banner Url</label>
                        <input onChange={EditHotelInput} type="text" name="banner" value={hotelUpdateData?.banner} id="banner" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Paste Banner url" required="" />
                    </div>
                    {HotelIdData?.gallery?.map((glry,index)=>{
                        return(<>
                        <div className="col-span-2" key={glry._id}>
                        <label for={glry} className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">
                        <Image
                            src={glry}
                            alt="avatar"
                            className="relative inline-block object-cover object-center w-12 h-12 rounded-lg"
                            width={30}
                            height={30}
                        />Gallery Url {index+1}</label>
                        <input  type="text"  id={glry} value={glry} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Paste Facility url" required="" />
                    </div>
                        </>)
                    })}

                    {HotelIdData?.facilities?.map((ele,index)=>{
                        return(<>
                        <div className="col-span-2 sm:col-span-1">
                        <label for={ele?.name} className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">Facility Name {index+1}</label>
                        <input  type="text" id={ele?.name} value={ele?.name} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter Facilities" required="" />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                    <label for={ele?.img} className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">
                    <Image src={ele?.img}
                            alt="avatar"
                            className="relative inline-block object-cover object-center w-8 h-8 rounded-lg"
                            width={10}
                            height={10}
                        />Logo Url {index+1}</label>
                        <input  type="text" id={ele?.img} value={ele?.img} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Paste Gallery url" required="" />
                    </div>
                        </>)
                    })}

                    <div className="col-span-2">
                        <label for="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">Product Description</label>
                        <textarea onChange={EditHotelInput} id="description" name="description" rows="4" value={hotelUpdateData?.description} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write product description here"></textarea>                    
                    </div>
                </div>
                <button onClick={()=>updateHotel(hotelUpdateData?._id)} className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Update product
                </button>
                <button type="submit" onClick={()=>setEditToggle(false)} className="text-white inline-flex items-center ml-2 bg-red-500 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                    Cancel
                </button>
            </div>
        </div>
    </div>
</div> 
   </>
  )
}

export default EditProducts;
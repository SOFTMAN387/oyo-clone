import Image from "next/image";
import Link from "next/link";

const Hotel = ({ e }) => {
  return (
  
    <div className={`${e?.availability===false?"rounded-lg h-auto sm:w-auto justify-center opacity-50 items-center bg-gray-300 border-2 border-full border-red-500 rounded-md m-5":
    "rounded-lg h-auto sm:w-auto justify-center items-center  border-2 border-full border-red-500 rounded-md m-5"}`}>
      <div className="flex justify-center items-center">
      <Image
          src={e.banner}
          alt="hotel"
          width={300}
          height={300}
          className=" sm:w-50 w-60 mt-2 h-60 md:w-96"
        />
      </div>
       
        <div className="flex justify-center items-center gap-1 ">
          {e
            ? e.gallery?.map((ele) => {
                return (
                  <Image
                    key={ele}
                    src={ele}
                    alt="hotel"
                    width={50}
                    height={100}
                    className=" sm:w-15 h-16 object-cover m-2  "
                  />
                );
              })
            : ""}
        </div>
        <div className="  flex justify-center items-center flex-col md:text-xl sm:text-xl">
          <h2 className="font-bold text-xl  line-clamp-1">{e?.name}</h2>
          <p className=" text-justify text-lg">{e?.description}</p>
          <div className=" text-xl ">
            <span className=" font-bold">Facilities : </span>
            <ul className=" flex flex-col  lg:flex-row ">
              {e
                ? e.facilities?.map((ele) => {
                    return (
                      <li
                        key={ele.name}
                        className=" mb-3 flex items-center"
                      >
                        <span>
                          <Image
                            src={ele.img}
                            width={200}
                            height={200}
                            className="w-8 h-8 rounded-full"
                          />
                        </span>
                        <span className="ml-5">{ele.name}</span>
                      </li>
                    );
                  })
                : ""}
            </ul>
          </div>
          <div className=" flex items-center">
            <button className=" w-40 text-white h-14 rounded-lg bg-blue-400 text-lg">
              Price : &#8377; {e?.price}
            </button>
            {e?.availability===true?(
               <button className="flex items-center border border-blue-600 border-3 rounded p-3 m-2">
               <Link
                 href={`/hotels/${e._id}`}
                 className=" font-bold text-blue-600 "
               >
                 See Details
               </Link>
               </button>
            ):
            <button className="flex items-center border border-red-600 border-3 rounded p-3 m-2">
            <span
              className=" font-bold text-red-600 "
            >
             Not Available !
            </span>
            </button>}
           
           
          </div>
        </div>
      </div>
  );
};

export default Hotel;

// import React from 'react'

// import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import ProfileImg from "../assets/ProfileImg.jpg"


//  export default function Home() {
//   return (
//     <div className='name="home" h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
//      <div className='max-w-screen-lg h-full flex flex-col justify-center items-center px-4 mx-auto 
//      md:flex-row'>
//        <div className="flex flex-col justify-center h-full">
//            <h2 className="text-4xl sm:text-7xl font-bold text-white">
//              I'm a Full Stack Developer
//            </h2>
//            <p className="text-gray-500 py-4 max-w-md">
//              I have 8 years of experience building and desgining software.
//              Currently, I love to work on web application using technologies like
//              React, Tailwind, Next JS and GraphQL.
//            </p>
//            <div>
//            <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md 
//            bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer' >
//           Portfolio
//            <span className='group-hover:rotate-90 duration-300'>
//              <MdOutlineKeyboardArrowRight size={25} 
//              className='ml-1'/> 
//           </span>
//        </button>
//            </div>
        
//          </div>

     
//        <div>
//          <img src={ProfileImg} alt="Error" className="rounded-2xl mx-auto w-2/3  md:w-full" />
//        </div>

//     </div>

//     </div>
//    )
//  }


import React from "react";
import mainImg from "../assets/mainImg.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Frontend Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have 8 years of experience building and desgining software.
            Currently, I love to work on web application using technologies like
            React, Tailwind, Next JS and GraphQL.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={mainImg}
            alt="my profile"
            className="rounded-full mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
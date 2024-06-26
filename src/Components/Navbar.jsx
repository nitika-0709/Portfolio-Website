// import React, { useState } from 'react'

// import { FaBars ,FaTimes} from "react-icons/fa";


// export default function Navbar() {
//     const[nav,setNav]= useState(false)
//     const links = [
//         { 
//             id: 1,
//             link: "Home",
//         },
//         {
//             id: 2,
//             link: "About",
//         },
//         {
//             id: 3,
//             link: "Experience",
//         },
//         {
//             id: 4,
//             link: "Contact",
//         }
//     ];

//     return (
//         <div className=' w-full flex justify-between items-center h-20 px-4 bg-black text-white
//          fixed'>
// {/*         
//                 <div>
//                 <img src={profile} alt=""  className='h-10 rounded-xl'/>
//             </div> */}
//                 <div>
//                     <h2 className='text-5xl font-signature ml-2'>Nitika</h2>
//                     {/* <h2>Web Developer</h2> */}
//                 </div>

        
//             <ul className='hidden md:flex '>
//                 {links.map(({ id, link }) => (
//                     <li key={id} className='text-gray-500 px-4 cursor-pointer font-medium 
//                     hover:scale-105 duration-200 '>
//                         {link}
//                     </li>
//                 ))}
//             </ul>

//             <div onClick={()=>setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
//              {nav?<FaTimes size={30}/>:<FaBars size={30}/>}
//             </div>

//             {nav && (
//                  <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full
//                  h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 '>
//                      {links.map(({ id, link }) => (
//                         <li key={id} className='text-4xl px-4 cursor-pointer py-6 '>
//                             {link}
//                         </li>
//                     ))}
//                 </ul>
//             )}
           
//         </div>
//     )
// };


import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import mainImg from "../assets/mainImg.jpg";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "experience",
    },
    {
      id: 4,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
     
     <div className="flex">
      <div>
        <img src={mainImg} alt="" className="h-10 rounded-full"/>
      </div>
      <div>
        <h1 className="text-5xl font-signature ml-2">Nitika</h1>
      </div>
     </div>
     

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
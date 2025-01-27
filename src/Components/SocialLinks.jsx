import React from 'react'
import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

export default function SocialLinks() {
    const links = [
       {
          id: 1,
          child: (
            <>
              GitHub <FaGithub size={30} />
            </>
          ),
          href: "https://github.com/nitika-0709",
          style: "rounded-tr-md",
        },
        {
          id: 2,
          child: (
            <>
              Mail <HiOutlineMail size={30} />
            </>
          ),
          href: "mailto:2021nitikakumari@gmail.com",
        },
        {
          id: 3,
          child: (
            <>
              Resume <BsFillPersonLinesFill size={30} />
            </>
          ),
          href: "/Nitika_resume.pdf",
          style: "rounded-br-md",
          download: true,
        },
      ];
    
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}                                               
        </ul>

      
    </div>
  )
}

import React from 'react'

export default function About() {
  return (
    <div
    name="about"
    className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
  >
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          About
        </p>
      </div>
      <p>
         I'm Nitika, a passionate frontend developer with hands-on experience gained during a 
          4-month internship at Thinknext Technologies.I specialize in crafting responsive and 
          user-friendly interfaces using HTML5, CSS3, and JavaScript.
         </p>
         <br />
         <p>
         During my internship, I honed my skills in front-end frameworks like React JS.I also work with
         different libraries and frameworks like Bootstrap, Tailwind CSS.At Thinknext Technologies, I 
         contributed to dynamic projects that pushed the boundaries of user experience and performance. 
         Collaborating with talented teams, I leveraged my knowledge to deliver solutions that met 
         client requirements and exceeded expectations.
         
       </p>
       </div>
    </div>
  );
};


import React from 'react'
import Container from "../layout/Container"
const Footer = () => {
  return (
    <>
    <Container
       className={`mt-8 md:mt-8 gap-x-8 grid grid-cols-2  bg-black md:grid-cols-4 py-4  md:min-h-[30vh]`}
     >
       {Array.from({ length: 4 }).map((_, i) => (
         <div
           key={i}
           className=" md:w-[15rem] flex justify-center text-white gap-y-4 items-center flex-col h-[12rem] "
         >
           <div>
             <h3 className="text-heading5">Projects</h3>
           </div>
           <div className="text-smallParagraph text-center">
             <p>Act Nepal</p>
             <p>Team Vertex Nepal</p>
             <p>Diversified LCC</p>
             <p>Networks Hats</p>
           </div>
         </div>
       ))}
     </Container>
     <div className="w-full h-[2px] bg-white"></div>
     <Container
       className={`text-white gap-y-4 flex-col md:flex-row py-4 text-smallParagraph pt-5 flex justify-between w-full  bg-black md:min-h-[10vh]`}
     >
       <div>&copy;TechyLads. All rights reserved</div>
       <div>Terms . Privacy Policy</div>
       <div className="flex  gap-4  ">
         <div>
           <img src="/logo/facebook.png" alt="logo of Facebook" />
         </div>
         <div>
           <img src="/logo/facebook.png" alt="logo of Whats app" />
         </div>
         <div>
           <img src="/logo/facebook.png" alt="logo of Linkedin" />
         </div>
         <div>
           <img src="/logo/facebook.png" alt="logo of  Youtube" />
         </div>
       </div>
     </Container>
    </>
  )
}

export default Footer

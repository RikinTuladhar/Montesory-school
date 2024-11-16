import React from 'react'
import Button from "@/components/buttons/Button"
const Navbar = () => {
  return (
    <div className='w-full font-bold flex items-center px-10 justify-between h-[4.375rem] border'>
      <div><img src="/logo/logo.png" alt="Logo" /></div>
      <div className='flex gap-x-10'>
        <div>Admission</div>
        <div>Gallery</div>
        <div>Contact</div>
        <div>About</div>
      </div>
      <div>
       <Button className="bg-alternate" title={"Enquire Now"}/>
      </div>
    </div>
  )
}

export default Navbar

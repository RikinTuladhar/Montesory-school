import React from "react";
import { MoveRight } from 'lucide-react';
const Navbar = () => {
  return (
    <div className="w-full text-white font-bold  justify-between items-center flex h-[5rem] bg-background">
      <div className="flex items-center justify-center ml-36 size-20">
        <img src="/logo/logo.webp" alt="Logo" />
      </div>
      <div className="flex gap-10">
        <div>Home</div>
        <div>Product</div>
        <div>Pricing</div>
        <div>Contact</div>
      </div>
      <div className="flex items-center justify-between gap-16 mr-5">
        <div>Login</div>
        <div className="flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary"><span>Join Us </span> <MoveRight size={20}/></div>
      </div>
    </div>
  );
};

export default Navbar;

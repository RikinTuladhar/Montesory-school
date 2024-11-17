"use client";
import React, { useEffect, useState } from "react";
import Button from "@/components/buttons/Button";
import { useDispatch, useSelector } from "react-redux";
import { handleMobileView } from "@/redux/mobileView";
import { Menu } from "lucide-react";
import { House } from "lucide-react";
import { Info } from "lucide-react";
import { UserRoundSearch } from "lucide-react";
import { Pen } from "lucide-react";
const Navbar = () => {
  const dispatch = useDispatch();
  const mobileView = useSelector((s) => s?.mobileView.mobileView);
  const [showMenu, setShowMenu] = useState(false);

  
  useEffect(() => {
    if (typeof window !== "undefined") {
      dispatch(handleMobileView(window.innerWidth <= 500));
    }
  }, []);

  return (
    <div className="relative ">
      <div className="w-full font-bold flex-wrap flex items-center px-5 md:px-10 justify-between h-[4.375rem] border">
        <div>
          <img src="/logo/logo.png" alt="Logo" />
        </div>
        {mobileView ? (
          <>
            <Menu
              onClick={() => {
                setShowMenu(!showMenu);
              }}
            />
          </>
        ) : (
          <>
            <div className="flex flex-wrap gap-x-10">
              <div>Home</div>
              <div>About Us</div>
              <div>Contact</div>
              <div>About</div>
            </div>
            <div>
              <Button className="bg-alternate" title={"Enquire Now"} />
            </div>
          </>
        )}
      </div>
      {showMenu && (
        <div
          className="w-full px-5 py-5 space-y-5 flex flex-col min-h-20 bg-background  "
          style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
        >
          <div className="flex  items-center gap-2">
            {" "}
            <House size={20} /> <span>Home</span>
          </div>
          <div className="w-[90%]  bg-black h-[0.5]"></div>
          <div className="items-center  flex gap-2">
            {" "}
            <Info size={20} /> <span>About Us</span>
          </div>
          <div className="w-[90%] bg-black h-[0.5]"></div>
          <div className="items-center  flex gap-2">
            {" "}
            <UserRoundSearch size={20} /> <span>Contact</span>
          </div>
          <div className="w-[90%] bg-black h-[0.5]"></div>
          <div className="items-center  flex gap-2">
            {" "}
            <Pen size={20} /> <span>Enquiry Now</span>
          </div>
          <div className="w-[90%] bg-black h-[0.5]"></div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

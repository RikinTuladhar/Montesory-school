"use client";
import Container from "@/layout/Container";
import Navbar from "@/components/navbar/Navbar";
import Button from "@/components/buttons/Button";
import { useDispatch, useSelector } from "react-redux";
import { handleMobileView } from "@/redux/mobileView";
import { useEffect, useState } from "react";
export default function Page() {
  const dispatch = useDispatch();
  const mobileView = useSelector((s) => s?.mobileView.mobileView);
  const [showMenu, setShowMenu] = useState(false);

  
  useEffect(() => {
    if (typeof window !== "undefined") {
      dispatch(handleMobileView(window.innerWidth <= 500));
    }
  }, []);
  return (
    <div>
      <Navbar />
      <Container className={`mt-8 md:mt-16 min-h-[80vh]`}>
        {/* upper section */}
        <div className="w-full flex  items-center">
          <div className="w-full md:w-[60%] flex-col  gap-y-4 md:gap-y-8 flex">
            <div className="w-full  space-y-2 md:space-y-4">
              <h5 className="  text-paragraph md:text-bigParagraph font-semibold">Best E-Learning Platform</h5>
              <h1 className="text-heading2  md:text-bigHeading">
                Getting Best <br /> Quality Education Is Now More Easier
              </h1>
              <p className="text-paragraph">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
                ad, enim repellat recusandae quod animi delectus dolorem aut?
                Commodi tempora sit ea odio unde autem, delectus, rerum alias,
                perferendis possimus eius quia. Optio! Velit ad, enim repellat
                recusandae quod animi delectus dolorem aut? Commodi tempora sit
                ea odio unde autem, delectus, rerum alias, perferendis possimus
                eius quia. Optio!
              </p>
            </div>
            <div className="w-full flex gap-x-8">
              <Button className="bg-alternate" title={"Watch Out"} />
              <div className="flex gap-2 justify-center items-center">
                <img src="/svgs/play.png" alt="Play Icon" />
                <p>See how it works?</p>
              </div>
            </div>
          </div>
         { !mobileView && <div className="w-[40%] flex justify-end items-center">
            <img src="/svgs/HeroSvg.png" alt="SVG" />
          </div>}
        </div>
      </Container>
      {/* lower section  */}
      <div className="w-full mt-12  text-whit flex-wrap flex justify-center gap-14 items-center bg-primary h-[10vh] py-12">
        <div className="flex flex-col">
          <div className="text-heading3">8k</div>
          <div>Success Stories</div>
        </div>
        <div className="h-[4rem] w-[0.3rem] rounded-3xl bg-white"></div>
        <div className="flex flex-col">
          <div className="text-heading3">8k</div>
          <div>Success Stories</div>
        </div>
        <div className="h-[4rem] w-[0.3rem] rounded-3xl bg-white"></div>
        <div className="flex flex-col">
          <div className="text-heading3">8k</div>
          <div>Success Stories</div>
        </div>
        <div className="h-[4rem] w-[0.3rem] rounded-3xl bg-white"></div>
        <div className="flex flex-col">
          <div className="text-heading3">8k</div>
          <div>Success Stories</div>
        </div>
        <div className="h-[4rem] w-[0.3rem] rounded-3xl bg-white"></div>
        <div className="flex flex-col">
          <div className="text-heading3">8k</div>
          <div>Success Stories</div>
        </div>
      </div>
      <Container className={`mt-16 min-h-[80vh]`}></Container>
    </div>
  );
}

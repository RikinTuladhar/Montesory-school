"use client";
import Container from "@/layout/Container";
import Navbar from "@/components/navbar/Navbar";
import Button from "@/components/buttons/Button";
import { useDispatch, useSelector } from "react-redux";
import { handleMobileView } from "@/redux/mobileView";
import { useEffect, useState } from "react";
export default function Page() {
  const dispatch = useDispatch();
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  const mobileView = useSelector((s) => s?.mobileView.mobileView);
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }

    // Cleanup the event listener on component unmount
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  useEffect(() => {
    dispatch(handleMobileView(windowWidth <= 500));
  }, [windowWidth, dispatch]);
  return (
    <div>
      <Navbar />
      {heroSection()}
      {/* lower section  */}
      {mobileView ? mobileTopCoutingFooter() : deskTopCoutingFooter()}
      {secondSection()}
    </div>
  );

  function secondSection() {
    return (
      <>
        {/* top section  */}
        <Container className={`mt-16 my-16 md:flex`}>
          <div className="space-y-20 md:w-[50%] ">
            <div className="space-y-8">
              <div>
                <h2 className="text-heading3 md:text-heading2 ">
                  Why we are best from others?
                </h2>
              </div>
              <div>
                <p className="text-bigParagraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  culpa animi eos itaque sunt dolorum saepe magni, accusantium
                  delectus fugit adipisci odit, qui hic enim nisi dolor labore
                  explicabo voluptas?
                </p>
              </div>
            </div>
            <div>
              <Button className={`bg-alternate`} title={"Watch Out"} />
            </div>
          </div>
          {!mobileView && (
            <div className=" w-full space-y-4 md:w-[50%]">
              <div className="w-full h-24 rounded-xl ">
                <img
                  src="/images/study.png"
                  className="w-full h-full"
                  alt="image of study"
                />
              </div>
              <div className="w-full h-24 rounded-xl  ">
                <img
                  src="/images/target.png"
                  className="w-full h-full"
                  alt="image of target"
                />
              </div>
              <div className="w-full h-24 rounded-xl ">
                <img
                  src="/images/teach.png"
                  className="w-full h-full"
                  alt="image of teach"
                />
              </div>
            </div>
          )}
        </Container>
        {/* lower section  */}
        <Container
          className={`my-4 space-y-12 justify-between items-center md:flex`}
        >
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
              className="md:w-[20rem] space-y-2 rounded-lg  bg-cards px-2 py-2"
            >
              <div className="w-full  h-[85%]">
                <img
                  src="/images/readingGirl.png"
                  className="w-full h-full"
                  alt="Image"
                />
              </div>
              <div>
                <h3 className="text-heading4">Learn More To Get Good </h3>
              </div>
            </div>
          ))}
        </Container>
      </>
    );
  }

  function heroSection() {
    return (
      <Container className={`mt-8 md:mt-16 min-h-[80vh]`}>
        {/* upper section */}
        <div className="w-full flex  items-center">
          <div className="w-full md:w-[60%] flex-col  gap-y-4 md:gap-y-8 flex">
            <div className="w-full  space-y-2 md:space-y-4">
              <h5 className="  text-paragraph md:text-bigParagraph font-semibold">
                Best E-Learning Platform
              </h5>
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
            <div className="w-full mt-5 space-y-5 md:space-y-0 flex-col md:flex-row flex md:gap-x-8">
              <Button className="bg-alternate" title={"Watch Out"} />
              <div className="flex gap-2 justify-center items-center">
                <img src="/svgs/play.png" alt="Play Icon" />
                <p>See how it works?</p>
              </div>
            </div>
          </div>
          {!mobileView && (
            <div className="w-[40%] flex justify-end items-center">
              <img src="/svgs/HeroSvg.png" alt="SVG" />
            </div>
          )}
        </div>
      </Container>
    );
  }

  function deskTopCoutingFooter() {
    return (
      <div className="w-full mt-12  text-whit flex-wrap flex justify-center gap-14 items-center bg-primary  py-12">
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
    );
  }
  function mobileTopCoutingFooter() {
    return (
      <div className="w-full my-10 md:my-0 py-10 text-white flex-col space-y-4 flex justify-center items-center bg-primary">
        <div className="flex flex-col">
          <div className="space-y-2">
            <div className="text-heading3 text-center">8k</div>

            <div>Success Stories</div>
            <div className="h-[0.3rem] w-full rounded-3xl bg-white"></div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="space-y-2">
            <div className="text-heading3 text-center">8k</div>

            <div>Success Stories</div>
            <div className="h-[0.3rem] w-full rounded-3xl bg-white"></div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="space-y-2">
            <div className="text-heading3 text-center">8k</div>

            <div>Success Stories</div>
            <div className="h-[0.3rem] w-full rounded-3xl bg-white"></div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="space-y-2">
            <div className="text-heading3 text-center">8k</div>

            <div>Success Stories</div>
            <div className="h-[0.3rem] w-full rounded-3xl bg-white"></div>
          </div>
        </div>
      </div>
    );
  }
}

"use client";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    // first container
    <>
      <Navbar />
      <div className="w-full flex justify-around min-h-[100vh] bg-background">
        <div className="w-[60%] grid font-serif text-white place-items-center ">
          <div className="space-y-10">
            <div>
              <h5 className="text-xl">For Better Future</h5>
            </div>
            <div>
              <h1 className="flex flex-col space-y-6 text-6xl"><span>Online Montessori</span> <span>School</span></h1>
            </div>
            <div>
              <h3 className="text-2xl">Hoop Primary Year Program</h3>
            </div>
            <div className="flex gap-5">
              <button className="px-10 py-3 font-semibold rounded-md bg-primary">Get Quote Now</button>
              <button className="px-8 py-3 font-semibold border rounded-md">Learn More</button>
            </div>
          </div>
        </div>

        <div className="w-[40%] grid place-items-center  ">
          <img src="/images/homeposter.png" alt="Poster" />
        </div>
      </div>
      <div>
        <img src="/divider/wave1.svg" alt="Divider" />
      </div>
    </>
  );
}

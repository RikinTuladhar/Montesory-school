"use client";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    // first container
    <>
      <Navbar />
      {/* first section  */}
      <section className="w-full relative min-h-[100vh]">
        <div className="w-full flex justify-around  min-h-[100vh] bg-background">
          <div className="w-[60%] grid font-serif text-white place-items-center ">
            <div className="space-y-10">
              <div>
                <h5 className="text-xl 2xl:text-3xl">For Better Future</h5>
              </div>
              <div>
                <h1 className="flex flex-col space-y-6 text-6xl 2xl:text-7xl">
                  <span>Online Montessori</span> <span>School</span>
                </h1>
              </div>
              <div>
                <h3 className="text-2xl 2xl:text-3xl">
                  Hoop Primary Year Program
                </h3>
              </div>
              <div className="flex gap-5 2xl:text-2xl">
                <button className="px-10 py-3 font-semibold rounded-md bg-primary">
                  Get Quote Now
                </button>
                <button className="px-8 py-3 font-semibold border rounded-md">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          <div className="w-[50%] grid place-items-center  ">
            <img
              src="/images/homeposter.png"
              className="w-[90%]"
              alt="Poster"
            />
          </div>
        </div>
        <div className="absolute z-50 w-full bg-background">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              fill="#FFFFFF"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section>
      {/* second section  */}
      <section className="w-full  text-black pt-56 bg-white relative min-h-[120vh]">
        {/* sub first  */}
        <div className="w-full py-10 text-black px-72">
          <div className="py-1">
            <h5 className="text-xl font-bold text-primary">
              The Foundation of future
            </h5>
          </div>
          <div className="py-1">
            <h3 className="text-5xl font-bold">Program Overview</h3>
          </div>
          <div>
            <p className="py-3 text-gray-600 pr-96">
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Sapiente, laudantium dolores consequuntur eveniet dolor laboriosam
              laborum ducimus numquam."
            </p>
          </div>
          <div>
            <ul className="pl-10 text-gray-600 list-disc">
              <li>Ages: 2.5-6</li>
              <li>Ages: 2.5-6</li>
              <li>Ages: 2.5-6</li>
              <li>Ages: 2.5-6</li>
            </ul>
          </div>
        </div>
        {/* sub second  */}
        <div className="flex w-full ">
          <div className="w-[50%]  grid place-items-center ">
            <img
              src="/images/homeposter2.png"
              className="w-[70%]"
              alt="Image of girl"
            />
          </div>

          <div className="w-[50%] place-items-center space-y-5 py-10  grid">
            <div className="pr-20 space-y-4">
              <h2 className="text-3xl">Primary years Curriculum</h2>
              <p>
                Most calendars are designed for teams. Slate designed for
                freelancers
              </p>
            </div>
            <div className="grid w-full grid-cols-2 px-24 py-5 ">
              <div className="flex px-5 py-2 space-x-5">
                <div className="flex items-center justify-center font-bold bg-gray-300 rounded-full text-primary size-14">
                  01
                </div>

                <div>
                  <h5 className="font-bold">Language</h5>
                  <div>
                    <ol className="pl-5 list-decimal">
                      <li>Oral Preparation</li>
                      <li>Early Lanuage Activies</li>
                      <li>Writing</li>
                      <li>Reading</li>
                      <li>Word Study</li>
                      <li>Grammar</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="flex px-5 py-2 space-x-5">
                <div className="flex items-center justify-center font-bold bg-gray-300 rounded-full text-primary size-14">
                  01
                </div>

                <div>
                  <h5 className="font-bold">Language</h5>
                  <div>
                    <ol className="pl-5 list-decimal">
                      <li>Oral Preparation</li>
                      <li>Early Lanuage Activies</li>
                      <li>Writing</li>
                      <li>Reading</li>
                      <li>Word Study</li>
                      <li>Grammar</li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="flex px-5 py-2 space-x-5">
                <div className="flex items-center justify-center font-bold bg-gray-300 rounded-full text-primary size-14">
                  01
                </div>

                <div>
                  <h5 className="font-bold">Language</h5>
                  <div>
                    <ol className="pl-5 list-decimal">
                      <li>Oral Preparation</li>
                      <li>Early Lanuage Activies</li>
                      <li>Writing</li>
                      <li>Reading</li>
                      <li>Word Study</li>
                      <li>Grammar</li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="flex px-5 py-2 space-x-5">
                <div className="flex items-center justify-center font-bold bg-gray-300 rounded-full text-primary size-14">
                  01
                </div>

                <div>
                  <h5 className="font-bold">Language</h5>
                  <div>
                    <ol className="pl-5 list-decimal">
                      <li>Oral Preparation</li>
                      <li>Early Lanuage Activies</li>
                      <li>Writing</li>
                      <li>Reading</li>
                      <li>Word Study</li>
                      <li>Grammar</li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="flex px-5 py-2 space-x-5">
                <div className="flex items-center justify-center font-bold bg-gray-300 rounded-full text-primary size-14">
                  01
                </div>

                <div>
                  <h5 className="font-bold">Language</h5>
                  <div>
                    <ol className="pl-5 list-decimal">
                      <li>Oral Preparation</li>
                      <li>Early Lanuage Activies</li>
                      <li>Writing</li>
                      <li>Reading</li>
                      <li>Word Study</li>
                      <li>Grammar</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

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
        <div className="w-full py-5 text-black px-72">
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

          <div className="w-[50%] place-items-center gap-x-5 gap-y-5  py-10  grid">
            <div className="pr-20 space-y-4">
              <h2 className="text-3xl">Primary years Curriculum</h2>
              <p>
                Most calendars are designed for teams. Slate designed for
                freelancers
              </p>
            </div>
            <div className="grid w-full grid-cols-2 px-5 py-5 ">
              <div className="flex px-5 py-2 space-x-5">
                <div className="flex items-center justify-center font-bold bg-gray-300 rounded-full text-primary size-12">
                  01
                </div>
                <div>
                  <h5 className="font-bold">Language</h5>
                  <div>
                    <ol className="pl-5 text-sm text-gray-500 list-decimal">
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
                <div className="flex items-center justify-center font-bold bg-gray-300 rounded-full text-primary size-12">
                  02
                </div>

                <div>
                  <h5 className="font-bold">Language</h5>
                  <div>
                    <ol className="pl-5 text-sm text-gray-500 list-decimal">
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
                <div className="flex items-center justify-center font-bold bg-gray-300 rounded-full text-primary size-12">
                  03
                </div>

                <div>
                  <h5 className="font-bold">Language</h5>
                  <div>
                    <ol className="pl-5 text-sm text-gray-500 list-decimal">
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
                <div className="flex items-center justify-center font-bold bg-gray-300 rounded-full text-primary size-12">
                  04
                </div>

                <div>
                  <h5 className="font-bold">Language</h5>
                  <div>
                    <ol className="pl-5 text-sm text-gray-500 list-decimal">
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
                <div className="flex items-center justify-center font-bold bg-gray-300 rounded-full text-primary size-12">
                  05
                </div>

                <div>
                  <h5 className="font-bold">Language</h5>
                  <div>
                    <ol className="pl-5 text-sm text-gray-500 list-decimal">
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
      {/* third section  */}
      <section className="w-full text-black space-y-2 px-16  pb-20  relative  min-h-[90vh]">
        <div className="">
          <h5 className="font-bold text-primary">Our Kits</h5>
        </div>
        <div>
          <h1 className="text-4xl font-bold">Out Montessori Home Kits</h1>
        </div>
        <div>
          <p className="text-gray-500">
            Materials do to the mind what Sports does to the body
          </p>
        </div>
        <div className="w-full h-[70vh] flex justify-between items-center">
          {Array.from({ length: 4 }).map((_, i) =>
            i % 2 == 0 ? (
              <div
                className="flex flex-col py-5 pl-10 pr-5 space-y-3 bg-white w-60 min-h-80"
                style={{
                  boxShadow:
                    "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
                }}
              >
                <div className="">
                  <img
                    src="/images/France.png"
                    className="size-24"
                    alt="Logo"
                  />
                </div>
                <div>
                  <h3 className="font-bold">Pink Tower</h3>
                </div>
                <div className="bg-primary w-[30%] h-[3px]"></div>
                <div>
                  <p className="font-bold text-gray-400 ">
                    Scientific - Every material is desigend with years of
                    scientific observations by Dr Maria Montesorri
                  </p>
                </div>
              </div>
            ) : (
              <div
                className="flex flex-col py-5 pl-10 pr-5 mt-20 space-y-3 bg-white-300 w-60 min-h-80"
                style={{
                  boxShadow:
                    "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
                }}
              >
                <div className="">
                  <img
                    src="/images/France.png"
                    className="size-24"
                    alt="Logo"
                  />
                </div>
                <div>
                  <h3 className="font-bold">Pink Tower</h3>
                </div>
                <div className="bg-primary w-[30%] h-[3px]"></div>
                <div>
                  <p className="font-bold text-gray-400 ">
                    Scientific - Every material is desigend with years of
                    scientific observations by Dr Maria Montesorri
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </section>
      {/* forth sections */}
      <section className="w-full text-black space-y-2 px-16  pb-20  relative  min-h-[90vh]">
        <div className="w-full">
          <h5 className="font-bold text-primary">Testimonials</h5>
        </div>
        <div>
          <h1 className="text-5xl font-bold">What our parents say about us</h1>
        </div>
        <div className="w-full flex justify-between pt-10 min-h-[20vh]">
          {/* card */}
          {Array.from({ length: 4 }).map((_, i) => (
            <div className="  w-[15rem] flex justify-center flex-col items-center min-h-[30rem]  ">
              <div className="h-[50%] min-h-[15rem] w-full ">
                <img
                  src="/images/Student-learning-4.jpg"
                  className="w-full h-full"
                  alt="images"
                />
              </div>
              <div className="flex h-[50%] px-5 space-y-3 py-2 flex-col items-center justify-center">
                <div className="flex px-2 py-1 text-white rounded-3xl bg-blue-950 ">
                  <span>Star</span> <span>4.9</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Video in live Action</h3>
                </div>
                <div className="text-justify">
                  <p className="text-sm text-gray-600 ">
                    The best edution we could home for sitting here in a remote
                    factor settlement - Mrigya, Mother of Tia
                  </p>
                </div>
                <button className="w-full px-5 py-2 font-bold border text-primary border-primary rounded-3xl">
                  Watch Video
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

// import React, { useState } from 'react'
import TopMenuBar from "../component/TopMenuBar";
import { MdOutlineEmergencyRecording, MdKeyboard } from "react-icons/md";
import { BsChevronLeft, BsChevronRight, BsDot } from "react-icons/bs";
import { useState } from "react";

function HomeScreen() {
   const [ imageIndex, setImageIndex ] = useState(0);

  const slides = [
    {
      img: "https://www.gstatic.com/meet/user_edu_get_a_link_light_90698cd7b4ca04d3005c962a3756c42d.svg",

      title: "Get a link you can share",
      description: "Click new meeting to schedule meetings in Google Calendar and send invites to participants",
      Index:0
    },
    {
      img: "https://www.gstatic.com/meet/user_edu_scheduling_light_b352efa017e4f8f1ffda43e847820322.svg",

      title: "Plan ahead",
      description: "Cick new meeting to schedule meetings in Google Calendar and send invites to participants",
      Index:1
    },
    {
      img: "https://www.gstatic.com/meet/user_edu_safety_light_e04a2bbb449524ef7e49ea36d5f25b65.svg",

      title: "Your meeeting is safe",
      description: "No one can join a meeting unless invited or admitted by the host",
      Index:2
    },

  ];

  // const prevSlide = () => {
  //   const isFirstSlide = imageIndex === 0;
  //   const isNextSlide = isFirstSlide ? slides.length - 1 : imageIndex - 1;
  //   setImageIndex(isNextSlide);
  // };



  // const goToSlide = (i) => {
  //   setImageIndex(i);
  // };


  const moveRight =()=>{
    const isLastSlide = imageIndex === slides.length - 1;
    const isNextSlide = isLastSlide ? 0 : imageIndex + 1;
    setImageIndex(isNextSlide);

  }
  const moveLeft =()=>{
      const isFirstSlide = imageIndex === 0;
    const isNextSlide = isFirstSlide ? slides.length - 1 : imageIndex - 1;
    setImageIndex(isNextSlide);

  }
  return (
    <>
      <TopMenuBar />
      <div>
        <div className="grid md:grid-cols-2 lg:gap-x-[400px] mt-12 md:mt-18">
          <div className="md:w-[60vw] px-6 lg:px-12 mt-8">
            <p className="text-4xl md:text-5xl text-zinc-700 pr-4">
              Premium video meetings. Now free for everyone
            </p>
            <p className="text-gray-600 mt-[40px] text-lg w-[90vw] sm:w-[90%]">
              We re-engineered the service we built for secure business
              meetings, Google Meet, to make it free and available for all.
            </p>

            <div className="mt-[50px] lg:flex  lg:items-center">
              <div className="cursor-pointer  flex justify-between items-center flex-shrink-0 px-2 w-[150px] h-[50px] bg-blue-600 rounded-md">
                <MdOutlineEmergencyRecording
                  size={22}
                  className="text-[#fff]"
                />
                <p className="text-white text-lg ">New meeting</p>
              </div>
              <div className="relative mt-4 lg:mt-0 lg:ml-4 flex  rounded-md focus:border-blue-500">
                <input
                  type="text"
                  className=" pl-12 pr-2 w-[250px] h-[50px] rounded-md text-lg border-2 border-blue-600 focus:outline-none text-gray-600"
                  placeholder="enter a code link"
                />
                <MdKeyboard
                  size={22}
                  className="text-[#626060] absolute top-[30.5%] left-4"
                />
              </div>
              <p className="text-gray-400 text-lg sm:ml-4">Join</p>
            </div>

            <div className="hidden md:block mt-[60px] border-t-[1px] border-gray-300">
              <p className="text-gray-600 text-lg mt-[30px] ">
                <span className="text-blue-600">Learn more</span> about Google
                Meet
              </p>
            </div>
          </div>

          {/* carousel images on nthe right BsChevronRight */}
          <div className="w-[100%] justify-center md:justify-normal  md:ml-14 mt-8 lg:mt-0 lg:ml-0 lg:w-[35vw] flex items-center  ">
        

            <div>
              <div className="flex items-center">
              <div className=" rounded-full mr-2 flex items-center justify-center w-[40px] h-[40px] hover:bg-gray-100"
              onClick={moveLeft}
              >
              <BsChevronLeft size={22} className="text-gray-500" />
            </div>
                <div
                  className="rounded-full  overflow-hidden flex items-center justify-center w-[270px] h-[270px] bg-no-repeat bg-cover md:w-[250px] md:h-[250px] lg:w-[260px] lg:h-[260px] xl:w-[300px] xl:h-[300px]  2xl:w-[330px] 2xl:h-[330px]  bg-gray-100"
                  style={{
                    backgroundImage:
                      `url(${slides[imageIndex].img})`,
                  }}
                >
                  {/* <img
            src="https://exej2saedb8.exactdn.com/wp-content/uploads/2022/02/Screen-Shot-2022-02-04-at-2.28.40-PM.png?strip=all&lossy=1&ssl=1"
            alt="icon"
          /> */}
                </div>
                <div className=" rounded-full ml-2 flex items-center justify-center w-[40px] h-[40px] hover:bg-gray-100"
                onClick={moveRight}
                >
              <BsChevronRight size={20} className="text-gray-500" />
            </div>
              </div>
        <div className="flex justify-center">
        <div className="  w-[300px] h-[300px]  md:w-[250px] md:h-[250px] lg:w-[260px] lg:h-[260px] xl:w-[300px] xl:h-[300px]">
                <p className="text-xl text-center font-semibold text-zinc-700 my-4">
                {slides[imageIndex].title}
                </p>
                <p className=" text-zinc-700 my-2 text-center">
                {slides[imageIndex].description}
                </p>
                <div className="w-[300px] h-[300px] flex justify-center">
{imageIndex === 0 ? <BsDot size={20} className={`text-blue-700`}/>: 
<BsDot size={20} className={`text-gray-500`}/>}
{imageIndex === 1 ? <BsDot size={20} className={`text-blue-700`}/>: 
<BsDot size={20} className={`text-gray-500`}/>}
{imageIndex === 2 ? <BsDot size={20} className={`text-blue-700`}/>: 
<BsDot size={20} className={`text-gray-500`}/>}

                </div>
              </div>
        </div>
            </div>

          
          </div>

          <footer>
            <p className="text-gray-600 text-lg mt-[30px] block md:hidden my-6 mx-6">
              <span className="text-blue-600">Learn more</span> about Google
              Meet
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}

export default HomeScreen;

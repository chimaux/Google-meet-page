// import React, { useState } from 'react'
import TopMenuBar from '../component/TopMenuBar'
import {
  MdOutlineEmergencyRecording,
   MdKeyboard, 

  } from "react-icons/md"


function HomeScreen() {


  // const { imageIndex, setImageIndex } = useState(1);

  // const slides = [
  //   {
  //     img: "https://www.shutterstock.com/image-photo/interior-small-apartment-living-room-260nw-2154108011.jpg",
     
  //     title: "Get a link you can share",
  //     description: "Click new meeting to schedule meetings in Google Calendar and send invites to participants",
  //     imageIndex:1
  //   },
  //   {
  //     img: "https://exej2saedb8.exactdn.com/wp-content/uploads/2022/02/Screen-Shot-2022-02-04-at-2.28.40-PM.png?strip=all&lossy=1&ssl=1",
    
  //     title: "Plan ahead",
  //     description: "Cick new meeting to schedule meetings in Google Calendar and send invites to participants",
  //     imageIndex:2
  //   },
  //   {
  //     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZKiP_n9gPuCJkFTg7NFbnGLK9Mf1J28o8r7cY8XBGgMQcnHlA_vRB5QJ-iM02QCZkgC4&usqp=CAU",
      
  //     title: "Your meeeting is safe",
  //     description: "No one can join a meeting unless invited or admitted by the host",
  //     imageIndex:3
  //   },

  // ];


  // const prevSlide = () => {
  //   const isFirstSlide = imageIndex === 0;
  //   const isNextSlide = isFirstSlide ? slides.length - 1 : imageIndex - 1;
  //   setImageIndex(isNextSlide);
  // };

  // const nextSlide = () => {
  //   const isLastSlide = imageIndex === slides.length - 1;
  //   const isNextSlide = isLastSlide ? 0 : imageIndex + 1;
  //   setImageIndex(isNextSlide);
  // };

  // const goToSlide = (i) => {
  //   setImageIndex(i);
  // };




  return (
    <>
    <TopMenuBar/>
<div>
<div className="grid md:grid-cols-2 lg:gap-x-[400px] ">
<div className='md:w-[60vw] px-6 lg:px-12'>
   <p className='text-4xl md:text-5xl text-zinc-700 pr-4'>Premium video meetings. Now free for everyone</p> 
 <p className='text-gray-600 mt-[40px] text-lg w-[90vw] sm:w-[90%]'>We re-engineered the service we built for secure business meetings, Google Meet, to make it free and available for all.</p>

 <div className='mt-[50px] lg:flex  lg:items-center'>
  <div className='flex justify-between items-center flex-shrink-0 px-2 w-[150px] h-[50px] bg-blue-600 rounded-md'>
  < MdOutlineEmergencyRecording size={22} className='text-[#fff]'/>
  <p className='text-white text-lg '>New meeting</p>
  </div>
  <div className='relative mt-4 lg:mt-0 lg:ml-4 flex  rounded-md focus:border-blue-500'>
    <input type="text" className=' pl-12 pr-2 w-[250px] h-[50px] rounded-md text-lg border-2 border-blue-600 focus:outline-none text-gray-600'
    placeholder='enter a code link'
    
    />
  < MdKeyboard size={22} className='text-[#626060] absolute top-[30.5%] left-4'/>
  </div>
  <p className='text-gray-400 text-lg sm:ml-4'>Join</p>
 </div>

 <div className='hidden md:block mt-[60px] border-t-[1px] border-gray-400'>
  <p className='text-gray-600 text-lg mt-[30px] '><span className='text-blue-600'>Learn more</span> about Google Meet</p>
</div>

</div>



{/* carousel images on nthe right */}
<div className='w-[100vw] ml-6 md:ml-14 mt-8 lg:mt-0 lg:ml-0 lg:w-[35vw] flex items-center'>

<div className="rounded-full  overflow-hidden flex items-center justify-center w-[300px] h-[300px] bg-no-repeat bg-cover  bg-gray-300"
style={{ backgroundImage: "url(https://exej2saedb8.exactdn.com/wp-content/uploads/2022/02/Screen-Shot-2022-02-04-at-2.28.40-PM.png?strip=all&lossy=1&ssl=1)" }}
>
            {/* <img
            src="https://exej2saedb8.exactdn.com/wp-content/uploads/2022/02/Screen-Shot-2022-02-04-at-2.28.40-PM.png?strip=all&lossy=1&ssl=1"
            alt="icon"
          /> */}
            </div>


</div>

<footer>
<p className='text-gray-600 text-lg mt-[30px] block md:hidden my-6 mx-6'><span className='text-blue-600'>Learn more</span> about Google Meet</p>
</footer>
    </div>
</div>
    </>
   
  )
}

export default HomeScreen
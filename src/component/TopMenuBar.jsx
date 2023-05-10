import React from "react";
import { AiOutlineQuestionCircle, AiOutlineSetting } from "react-icons/ai";
import { BsChatLeftDots } from "react-icons/bs";
import { CgMenuGridO } from "react-icons/cg";
function TopMenuBar() {
  return (
    <>
      <div className="flex items-center justify-end md:justify-between my-4 mx-4">
        <div className="hidden items-center  md:flex">
          <img
            src="https://www.gstatic.com/meet/google_meet_horizontal_wordmark_2020q4_1x_icon_124_40_2373e79660dabbf194273d27aa7ee1f5.png"
            alt="icon"
          />

          <p className="text-gray-600 text-xl font-semibold mt-[-5px]">Meet</p>
        </div>
        <div className="flex flex-col-reverse items-end sm:flex-row sm:items-center  space-x-6">
          <p className="text-gray-600 text-md md:text-xl md:mt-[-5px]  ">5:49PM . Tue, May 9</p>

          <div className="flex items-center space-x-3">
            <div className="rounded-full flex items-center justify-center w-[40px] h-[40px] hover:bg-gray-300">
              <AiOutlineQuestionCircle size={28} className="text-gray-500" />
            </div>
            <div className="rounded-full flex items-center justify-center w-[40px] h-[40px] hover:bg-gray-300">
              <BsChatLeftDots size={25} className="text-gray-500" />
            </div>
            <div className="rounded-full flex items-center justify-center w-[40px] h-[40px] hover:bg-gray-300">
              <AiOutlineSetting size={28} className="text-gray-500" />
            </div>
            <div className="rounded-full flex items-center justify-center w-[40px] h-[40px] hover:bg-gray-300">
              <CgMenuGridO size={28} className="text-gray-500" />
            </div>
            <div className="rounded-full overflow-hidden flex items-center justify-center w-[38px] h-[38px] bg-gray-300">
            <img
            src="https://lh3.googleusercontent.com/ogw/AOLn63HVOisiF229PK8ij3jdz_czXwHl3_X-9v2xAB0QNg=s32-c-mo"
            alt="icon"
          />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopMenuBar;

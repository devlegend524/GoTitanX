import React from "react";

const AdvertHere = () => {
  return (
    <div className="flex justify-center border-[1px] border-[#333] pt-10 pb-5 rounded-2xl my-16">
      <div>
        <a className="flex justify-center bg-white text-[#111] font-semibold rounded-3xl items-center cursor-pointer">
          <h2 className="text-md p-2">Advertise Here</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-up-right"
          >
            <path d="M7 7h10v10" />
            <path d="M7 17L17 7" />
          </svg>
        </a>
        <p className="flex justify-center text-[12px] p-1 text-[#aaa]">With privacy-friendly Ads</p>
      </div>
    </div>
  );
};

export default AdvertHere;

import React from "react";

const MainToken = () => {
  return (
    <div className="w-[100%]">
      <div className="my-3  border-[1px] border-[#333] rounded-xl p-2 block font-semibold">
        {/* subfirst */}

        <div className="px-5 flex items-center justify-between gap-3">
          <div className="flex items-center gap-5">
            <img
              src="https://gpls.pages.dev/img/coins/PLS.svg"
              alt="PLS Logo"
              className="h-7 w-7"
            />
            <div>
              <div className="text-white text-xl">PLS</div>
              <span className="text-sm text-[#555]">Pulse</span>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <a
              draggable="false"
              className="smallBtn pl-2 py-1 mr-[-3px]"
              aria-label="Coin Details"
              href="/token/INC"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* subsecond */}
        <div className="block border-[#333] border-t-[1px] my-2"></div>

        <div className="px-5 flex items-center justify-between gap-5">
          <div className="usdOuter">
            <div className="text-[20px]">
              <span className="usdSign text-xl">$</span>
              <span className="select-text text-xl">0.0000442</span>
            </div>
            <span className="text-[10px] text-[#777] whitespace-nowrap">
              0.44x Sac
            </span>
          </div>
          <div className="text-[12px]" style={{ color: "rgb(0, 255, 85)" }}>
            +33.6%
          </div>
        </div>

        {/* subthird */}
        <div className="px-3 block border-[#333] border-t-[1px] my-2"></div>

        <div className="px-5 flex items-center justify-around gap-5">
          <button className="flex flex-col items-center">
            <span className="text-[10px] text-[#777]">Market Cap</span>
            <div>
              <span className="usdSign text-xl">$</span>6B
            </div>
          </button>
          <button className="flex flex-col items-center">
            <span className="text-[10px] text-[#777]">Supply</span>
            <div className="flex items-center space-x-1">
              <span>136T</span>
              <img
                src="https://gpls.pages.dev/img/coins/white/PLS.svg"
                alt="White PLS Logo"
                className="h-4 w-4"
              />
            </div>
          </button>
          <button className="flex flex-col items-center">
            <span className="text-[10px] text-[#777]">Supply</span>
            <div className="flex items-center space-x-1">
              <span>136T</span>
              <img
                src="https://gpls.pages.dev/img/coins/white/PLS.svg"
                alt="White PLS Logo"
                className="h-4 w-4"
              />
            </div>
          </button>
        </div>

        {/* subforth */}
        <div className="border-[#333] border-t-[1px] block mt-5"></div>

        <div className="flex justify-center items-center pt-3 pb-1 text-[10px]">
          <p>Liquality: $4490434</p>
        </div>
      </div>
    </div>
  );
};

export default MainToken;

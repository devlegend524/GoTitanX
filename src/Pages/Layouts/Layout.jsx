import React from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="bg-black text-white">
      <header className="shadow-gray-500 font-semibold h-[80px] border-gray-700 border-b-[1px] flex items-center">
        <div className="flex justify-between items-center align-middle w-[90%] sm:w-[85%] md:w-[80%] lg:w-[75%] xl:w-[70%] 2xl:w-[55%] m-auto">
          <div className="flex items-center">
            <h1 className="text-xl sm:text-2xl font-serif border-white border-2 rounded-md px-2 py-1 mr-5">
              GoTitanX
            </h1>
            <ul className="sm:flex sm:justify-stretch text-sm sm:gap-8 text-gray-400 hidden">
              <li>
                <a href="/">Stats</a>
              </li>
              <li>
                <a href="/about">Apps</a>
              </li>
              <li>
                <a href="/contact">Coins</a>
              </li>
              <li>
                <a href="/">Buy</a>
              </li>
              <li>
                <a href="/">Portfolio</a>
              </li>
              <li>
                <a href="/">Swap</a>
              </li>
            </ul>
          </div>
          <div className="flex items-center text-gray-400">
            <a
              href="https://x.com/GoPulsecom"
              target="_blank"
              rel="noopener noreferrer"
              draggable="false"
              className="size-[50px] grid place-items-center active:scale-[85%]"
              aria-label="Follow @GoPulsecom for Updates"
            >
              <img
                src="https://gpls.pages.dev/img/social/com.twitter.svg"
                className="h-4 max-w-none opacity-50"
                alt="X.com Logo"
              />
            </a>

            {/* Wallet Connection Button */}
            <a
              href="/account"
              draggable="false"
              className="ml-3.5 w-[28px] aspect-square rounded-full overflow-hidden active:brightness-75 text-[#999] saturate-0 hover:text-white"
              aria-label="Connect my Wallet"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-circle-user"
              >
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="10" r="3" />
                <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
              </svg>
            </a>
          </div>
        </div>
      </header>
      <main className="w-[90%] sm:w-[85%] md:w-[80%] lg:w-[75%] xl:w-[70%] 2xl:w-[55%] m-auto pb-1">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;

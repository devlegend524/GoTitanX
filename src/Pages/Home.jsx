import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import MainToken from "../Components/MainToken";
import GetInfoBtn from "../Components/GetInfoBtn";
import AdvertHere from "../Components/AdvertHere";
import Detail from "../Components/Detail";
import CoinIntro from "../Components/CoinIntro";

function Home() {
    return (
        <div>
            {/* // Search Section */}

            <div className="relative my-8 sm:my-16">
                <input
                    type="text"
                    placeholder="Search for Coin / Block / Transaction"
                    className="placeholder:italic placeholder:text-[#555] font-semibold pl-12 pr-4 py-2 rounded-3xl w-full bg-transparent border-[1px] border-[#555] text-sm sm:text-xl"
                />
                <FontAwesomeIcon
                    icon={faSearch}
                    className="h-5 w-5 text-[#555] absolute left-4 top-1/2 transform -translate-y-1/2"
                />
            </div>

            {/* Second section */}

            <div className="flex justify-end sm:justify-between items-center my-3 sm:my-6">
                <h2 className="text-[#555] text-xl font-semibold hidden sm:block">
                    Day534
                </h2>
                <div className="flex border-[#555] border-[1px] p-1 rounded-3xl text-gray-60 text-sm sm:text-md lg:text-lg xl:text-lg">
                    <button className="hover:text-white focus:bg-gray-600 rounded-2xl px-1 sm:px-1 md:px-2 lg:px-2 xl:px-2 text-white">
                        5m
                    </button>
                    <button className="hover:text-white focus:bg-gray-600 rounded-2xl px-1 sm:px-1 md:px-2 lg:px-2 xl:px-2 text-white">
                        1h&nbsp;
                    </button>
                    <button className="hover:text-white focus:bg-gray-600 rounded-2xl px-1 sm:px-1 md:px-2 lg:px-2 xl:px-2 text-white">
                        6h&nbsp;
                    </button>
                    <button className="hover:text-white focus:bg-gray-600 rounded-2xl px-1 sm:px-1 md:px-2 lg:px-2 xl:px-2 text-white">
                        24h
                    </button>
                    <button className="hover:text-white focus:bg-gray-600 rounded-2xl px-1 sm:px-1 md:px-2 lg:px-2 xl:px-2 text-white">
                        7d&nbsp;
                    </button>
                    <button className="hover:text-white focus:bg-gray-600 rounded-2xl px-1 sm:px-1 md:px-2 lg:px-2 xl:px-2 text-white">
                        30d
                    </button>
                    <button className="hover:text-white focus:bg-gray-600 rounded-2xl px-1 sm:px-1 md:px-2 lg:px-2 xl:px-2 text-white">
                        90d
                    </button>
                    <button className="hover:text-white focus:bg-gray-600 rounded-2xl px-1 sm:px-1 md:px-2 lg:px-2 xl:px-2 text-white">
                        ATL
                    </button>
                </div>
            </div>

            {/* Third Section */}

            <div className="my-6  border-[1px] border-[#333] rounded-xl p-3 sm:p-6 sm:block md:flex md:justify-between font-semibold ">
                {/* subfirst */}

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-5">
                        <img
                            src="https://gpls.pages.dev/img/coins/PLS.svg"
                            alt="PLS Logo"
                            className="h-7 w-7"
                        />
                        <div>
                            <div className="text-white text-xl sm:text-2xl">PLS</div>
                            <span className="text-sm text-[#555]">Pulse</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-5">
                        <div className="flex items-center sm:hidden">
                            <a
                                draggable="false"
                                aria-label="Buy PLS"
                                className="min-[801px]:hidden p-1.5 px-4 smallBtn"
                                href="/buy"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-shopping-cart"
                                >
                                    <circle cx="8" cy="21" r="1"></circle>
                                    <circle cx="19" cy="21" r="1"></circle>
                                    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                                </svg>
                            </a>
                            <button
                                className="smallBtn pl-3 py-1.5 mr-[-3px]"
                                aria-label="Open Chart"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-line-chart"
                                >
                                    <path d="M3 3v18h18"></path>
                                    <path d="m19 9-5 5-4-4-3 3"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* subsecond */}
                <div className="block border-[#333] border-t-[1px] my-2 sm:border-l-[1px] "></div>

                <div className="flex items-center justify-between gap-5">
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
                <div className="block border-[#333] border-t-[1px] my-2 sm:border-l-[1px]"></div>

                <div className="flex items-center justify-around gap-5">
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
                </div>

                {/* subforth */}
                <div className="hidden border-[#333] sm:border-l-[1px] sm:block"></div>

                <div className="hidden sm:flex sm:items-center">
                    <a
                        draggable="false"
                        aria-label="Buy PLS"
                        className="min-[801px]:hidden p-1.5 px-4 smallBtn"
                        href="/buy"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-shopping-cart"
                        >
                            <circle cx="8" cy="21" r="1"></circle>
                            <circle cx="19" cy="21" r="1"></circle>
                            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                        </svg>
                    </a>
                    <button
                        className="smallBtn pl-3 py-1.5 mr-[-3px]"
                        aria-label="Open Chart"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-line-chart"
                        >
                            <path d="M3 3v18h18"></path>
                            <path d="m19 9-5 5-4-4-3 3"></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Forth Section */}

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                <MainToken />
                <MainToken />
                <MainToken />
            </div>

            {/* Fifth section */}

            <div className="flex justify-center gap-5">
                <GetInfoBtn title={"Include QA"} />
                <GetInfoBtn title={"Show Coins"} />
            </div>

            {/* Sixth section */}

            <AdvertHere />

            {/* Seventh section */}

            <Detail />

            {/* Popular Coins */}

            <h2 className="text-xl font-semibold py-5">Popular Coins</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
                <CoinIntro />
                <CoinIntro />
                <CoinIntro />
                <CoinIntro />
                <CoinIntro />
                <CoinIntro />
                <CoinIntro />
                <CoinIntro />
                <CoinIntro />
                <CoinIntro />
                <CoinIntro />
                <CoinIntro />
            </div>

            {/* Wrapped */}

            <h2 className="text-xl font-semibold py-5">Wrapped</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                <CoinIntro />
                <CoinIntro />
                <CoinIntro />
                <CoinIntro />
            </div>
            
            {/* Bridged */}

            <h2 className="text-xl font-semibold py-5">Bridged</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
                <CoinIntro />
                <CoinIntro />
                <CoinIntro />
                <CoinIntro />
                <CoinIntro />
                <CoinIntro />
            </div>

            {/* Memecoins */}

            <h2 className="text-xl font-semibold py-5">Memecoins</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
                <CoinIntro />
                <CoinIntro />
                <CoinIntro />
                <CoinIntro />
                <CoinIntro />
                <CoinIntro />
            </div>

            {/* Stablecoins */}

            <h2 className="text-xl font-semibold py-5">Stablecoins</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
                <CoinIntro />
                <CoinIntro />
                <CoinIntro />
                <CoinIntro />
                <CoinIntro />
                <CoinIntro />
            </div>

            {/* Perpetuals */}

            <h2 className="text-xl font-semibold py-5">Perpetuals</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
                <CoinIntro />
                <CoinIntro />
                <CoinIntro />
                <CoinIntro />
                <CoinIntro />
                <CoinIntro />
            </div>

            {/* Forked */}

            <h2 className="text-xl font-semibold py-5">Forked</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
                <CoinIntro />
                <CoinIntro />
                <CoinIntro />
                <CoinIntro />
                <CoinIntro />
                <CoinIntro />
            </div>

            <div className="flex justify-end">
                <button className="font-bold text-sm border-[1px] border-[#333] px-3 py-2 rounded-3xl hover:bg-[#111] active:bg-[#222] mt-6">Show All Coins-></button>
            </div>

            {/* Last section */}

            <AdvertHere />
        </div>
    );
}

export default Home;

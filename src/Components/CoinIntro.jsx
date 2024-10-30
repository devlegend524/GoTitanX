import React from "react";

const CoinIntro = () => {
    return (
        <div>
            <a
                draggable="false"
                className="
        border-2 p-6 rounded-xl
        flex items-center gap-2
        max-[1080px]:p-4
        col-span-4
        border-[#ffffff17] bg-black hover:bg-[#111] active:brightness-75
      "
                href="/token/HDRN"
            >
                <img
                    src="https://gpls.pages.dev/img/coins/HDRN.svg"
                    loading="lazy"
                    className="size-8"
                    alt="HDRN logo"
                />
                <div className="flex flex-col gap-2">
                    <div className="text-white font-bold">HDRN</div>
                    <div className="text-[12px]" style={{ color: "#0f5" }}>
                        +17.8%
                    </div>
                </div>
            </a>
        </div>
    );
};

export default CoinIntro;

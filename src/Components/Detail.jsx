import React from "react";

const Detail = () => {
  return (
    <div className="w-full flex flex-col border-2 border-[#171717] rounded-2xl bg-black px-12 py-10 max-[400px]:p-6">
      <div className="flex items-center">
        <a
          href="https://x.com/GoPulsecom"
          draggable="false"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 hover:brightness-[80%] active:brightness-[60%]"
        >
          <img
            src="https://pbs.twimg.com/profile_images/1666736001526407170/TUN79hLt_x96.jpg"
            alt="GoPulse Profile Picture"
            loading="lazy"
            className="w-10 rounded-full aspect-square"
          />
          <div className="flex flex-col gap-1.5 justify-start">
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-white">
                GoPulse.com
                <span className="max-[580px]:hidden">
                  {" "}
                  - The PulseChain Suite
                </span>
              </span>
              <img
                src="https://gpls.pages.dev/img/twitterCheckmark.svg"
                alt="Twitter Checkmark"
                loading="lazy"
                className="w-4"
              />
            </div>
            <div className="text-[#777] text-[12px] whitespace-nowrap">
              @GoPulsecom · Aug 17
            </div>
          </div>
        </a>
        <a
          href="https://x.com/intent/follow?screen_name=GoPulsecom"
          draggable="false"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto btn !px-4"
        >
          Follow
        </a>
      </div>
      <div className="mt-4 leading-normal">
        HEX Stakes are back 🎉
        <br />
        <br />
        Buy HEX:{" "}
        <a draggable="false" className="tl !text-[#0cf]" href="/x?out=HEX">
          GoPulse.com/x?out=HEX
        </a>{" "}
        🚀
        <br />
        <br />
        View your Stakes:{" "}
        <a draggable="false" className="tl !text-[#0cf]" href="/portfolio">
          GoPulse.com/portfolio
        </a>{" "}
        👀
        <br />
        <br />
        Manage your Stakes:{" "}
        <a draggable="false" className="tl !text-[#0cf]" href="/hex">
          GoPulse.com/hex
        </a>{" "}
        🔑
      </div>
      <div className="-ml-4 -mb-6 flex text-[14px] items-center">
        <a
          className="hover:text-[#f91880] text-[#777] font-bold p-4 flex items-center gap-1 active:brightness-75"
          href="https://x.com/intent/like?tweet_id=1824876925158072515"
          draggable="false"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-heart"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
          Like
        </a>
        <a
          className="hover:text-[#1b9bf0] text-[#777] font-bold p-4 flex items-center gap-1 active:brightness-75"
          href="https://x.com/intent/tweet?in_reply_to=1824876925158072515"
          draggable="false"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-message-circle"
          >
            <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
          </svg>
          Reply
        </a>
      </div>
    </div>
  );
};

export default Detail;

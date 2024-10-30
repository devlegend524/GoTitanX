import React from "react";

const GetInfoBtn = ({title}) => {
    return (
        <div>
            <button className="font-bold text-sm border-[1px] border-[#333] px-2 py-1 rounded-3xl hover:bg-[#111] active:bg-[#222]">{title}</button>
        </div>
    )
}

export default GetInfoBtn;
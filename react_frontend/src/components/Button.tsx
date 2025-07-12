import type React from "react";

export default function Buttoncomponent({children,onClickhandler,varient,size,icon}:
    {children:string, 
    onClickhandler: (e: React.MouseEvent<HTMLButtonElement>) => void,
    varient:"primary"|"secondary",
    size:"large"|"small",
    icon?: any} 
)

{
    return (
        <button
            onClick={onClickhandler}
            className={`flex py-2 rounded-lg cursor-pointer my-5 ${varient === "primary" ? "bg-black text-white" : "bg-gray-300 text-black"} ${size === "large" ? "text-lg px-20" : "text-sm px-10"}`}>
            {icon}
            {children}
        </button>
    );
}
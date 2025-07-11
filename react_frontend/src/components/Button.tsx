export default function Buttoncomponent({children,onClickhandler,varient,size}:
    {children:string, onClickhandler: (e: React.MouseEvent<HTMLButtonElement>) => void,varient:"primary"|"secondary",size:"large"|"small"}
)

{
    return (
        <button
            onClick={onClickhandler}
            className={`px-20 py-2 rounded-lg cursor-pointer my-5 ${varient === "primary" ? "bg-black text-white" : "bg-gray-300 text-black"} ${size === "large" ? "text-lg" : "text-sm"}`}
        >
            {children}
        </button>
    );
}
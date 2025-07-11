import { Link } from "react-router-dom";

export default function BottomWarning({children,to,buttontext}: {children:string,buttontext:string,to:string}) {
    return (
        <div className="flex  items-center justify-center my-4">
        <div className="text-sm text-gray-500 text-center mx-2">
            {children}
        </div>
        <Link to={to} className="text-blue-500 hover:underline">
            {buttontext}
        </Link>
        </div>
    );
}
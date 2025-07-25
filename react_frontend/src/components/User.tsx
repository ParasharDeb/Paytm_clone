import { useNavigate } from "react-router-dom";
import Buttoncomponent from "./Button";

export default function User({user}:{user:any}) {
    const navigate = useNavigate();

    return <div className="flex justify-between">
        <div className="flex">
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    {user.firstName[0]}
                </div>
            </div>
            <div className="flex flex-col justify-center h-ful">
                <div>
                    {user.firstName} {user.lastName}
                </div>
            </div>
        </div>

        <div className="flex flex-col justify-center h-ful">
            <Buttoncomponent varient="primary" size="small" onClickhandler={() => {
                navigate("/send?id=" + user._id + "&name=" + user.firstName);
            }} children={"Send Money"} />
        </div>
    </div>
}
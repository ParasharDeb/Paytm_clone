import Addicon from "../Icons/addicon";
import Sendicon from "../Icons/sent";
import Buttoncomponent from "./Button";
import { useNavigate } from "react-router-dom";
export default function Accountsbox(){
    const navigate = useNavigate();
    return(
        <div className="bg-white shadow-lg rounded-lg p-4 h-full mr-2">
            <div>My Accounts</div>     
            <div>
                
            </div>       
            <div className="flex gap-2">
                <div className="flex"><Buttoncomponent icon={Addicon} children="Add Money" varient="primary" size="small" onClickhandler={() =>navigate("/sendmoney") }/></div>
                <div><Buttoncomponent icon={Sendicon}children="Send Money" varient="primary" size="small" onClickhandler={() => navigate("/sendmoney")}/></div>            
            </div>
        </div>
    )
}
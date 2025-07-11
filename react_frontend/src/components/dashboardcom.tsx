import Money from "../Icons/money";
import Historybox from "./history";
import Accountsbox from "./myaccounts";
import Smallcardcomponent from "./smallcard";

export default function Dashboardcomp() {

    return (
        <div className="grid grid-cols-8  p-4 h-screen w-screen">
            <div className="col-span-8 flex gap-8 jusify-center items-center w-screen ">
                <div ><Smallcardcomponent title="Send Money" icon={<Money/>} /></div>
                <div ><Smallcardcomponent title="Send Money" icon={<Money/>} /></div>                
                <div ><Smallcardcomponent title="Send Money" icon={<Money/>} /></div>
                <div ><Smallcardcomponent title="Send Money" icon={<Money/>} /></div>
            </div>
            <div className="col-span-4 mt-4">
                <Accountsbox/>
            </div>
            <div className="col-span-4 mt-4">
                <Historybox/>
            </div>
        </div>
    );
}
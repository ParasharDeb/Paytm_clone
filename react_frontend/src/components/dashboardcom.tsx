
import Usersbox from "./users";
import Accountsbox from "./myaccounts";


export default function Dashboardcomp() {

    return (
        <div className="grid grid-cols-8  p-4 h-screen ">
        
            <div className="col-span-8 mt-4">
                <Accountsbox/>
            </div>
            <div className="col-span-8 mt-4">
                <Usersbox/>
            </div>
        </div>
    );
}
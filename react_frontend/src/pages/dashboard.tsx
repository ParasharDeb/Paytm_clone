import Dashboardcomp from "../components/dashboardcom"
import Leftnavbar from "../components/leftNavbar"

export default function Dashboard(){
    return(
        <div className="flex grid grid-cols-12 items-center justify-center h-screen">
            <div className="col-span-2"><Leftnavbar/></div>
           <div className="col-span-10"><Dashboardcomp/></div>
        </div>
    )
}
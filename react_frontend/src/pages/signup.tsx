import { useState } from "react";
import InputBox from "../components/inputbox";
import Buttoncomponent from "../components/Button";
import Heading from "../components/headings";
import BottomWarning from "../components/bottomwarning";

export default function Signup(){
    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");  
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    return(
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white py-2 px-8 rounded-lg shadow-md w-96 h-150">
            <Heading children='Signup'/>
            <div><InputBox type="text" label="email" value={email} onChange={(e)=>setemail(e.target.value)}/></div>            
            <div><InputBox type="password" label="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/></div>
            <div><InputBox type="text" label="First Name" value={firstname} onChange={(e)=>{setfirstname(e.target.value)}}/></div>            
            <div><InputBox type="text" label="Last Name" value={lastname} onChange={(e)=>{setlastname(e.target.value)}}/></div>            
            <div className="flex items-center justify-center"><Buttoncomponent children="Signup" onClickhandler={
                async()=>{
                    console.log("Signup clicked", email, password, firstname, lastname);
                }} 
                varient="primary" size="large"/></div>
            <div><BottomWarning children="Already have an account?" buttontext="Signin" to="/signin"/></div>
            </div>
            
        </div>
    )
}
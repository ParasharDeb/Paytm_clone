import { useState } from "react";
import InputBox from "../components/inputbox";
import Buttoncomponent from "../components/Button";
import Heading from "../components/headings";
import BottomWarning from "../components/bottomwarning";

export default function signin(){
    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");  
    return(
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white py-2 px-8 rounded-lg shadow-md w-96 h-110">
            <Heading children='Signup'/>
            <div><InputBox type="text" label="email" value={email} onChange={(e)=>setemail(e.target.value)}/></div>            
            <div><InputBox type="password" label="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/></div>
           
            <div className="flex items-center justify-center"><Buttoncomponent children="Signup" onClickhandler={
                async()=>{
                    console.log("Signup clicked", email, password);
                }} 
                varient="primary" size="large"/></div>
            <div><BottomWarning children="Already have an account?" buttontext="Signin" to="/signin"/></div>
            </div>
            
        </div>
    )
}
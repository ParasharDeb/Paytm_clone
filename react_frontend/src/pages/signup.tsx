import { useState } from "react";
import InputBox from "../components/inputbox";
import Buttoncomponent from "../components/Button";
import Heading from "../components/headings";
import BottomWarning from "../components/bottomwarning";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Signup(){
    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");  
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const navigate = useNavigate();
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
                    axios.post("http://localhost:3000/api/v1/user/signup", {
                        email: email,
                        password: password,
                        firstname: firstname, 
                        lastname: lastname
                    }).then(()=>{
                        navigate("/dashboard");
                    }).catch((error)=>{
                        console.error("Error during signup", error);
                    });
                }} 
                varient="primary" size="large"/></div>
            <div><BottomWarning children="Already have an account?" buttontext="Signin" to="/signin"/></div>
            </div>
            
        </div>
    )
}
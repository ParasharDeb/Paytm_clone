import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputBox from "../components/inputbox";
import Buttoncomponent from "../components/Button";
import Heading from "../components/headings";
import BottomWarning from "../components/bottomwarning";
import axios from "axios";

export default function signin(){
    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");  
    const navigate = useNavigate();
    return(
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white py-2 px-8 rounded-lg shadow-md w-96 h-110">
            <Heading children='Signin'/>
            <div><InputBox type="text" label="email" value={email} onChange={(e)=>setemail(e.target.value)}/></div>            
            <div><InputBox type="password" label="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/></div>
           
            <div className="flex items-center justify-center"><Buttoncomponent children="Signup" onClickhandler={
                async()=>{
                    await axios.post("http://localhost:3000/api/v1/user/signin", {
                        email: email,
                        password: password
                    }).then((response)=>{
                        navigate("/dashboard");
                        localStorage.setItem("token", response.data.token);
                    }).catch((error)=>{
                        console.error("Error during signin", error);
                    });
                }} 
                varient="primary" size="large"/></div>
            <div><BottomWarning children="Dont have an account?" buttontext="Signup" to="/signup"/></div>
            </div>
            
        </div>
    )
}
import { useState } from "react";
import InputBox from "../components/inputbox";
import Buttoncomponent from "../components/Button";
import Sendicon from "../Icons/sent";
import axios from "axios";

export default function Sendmoney(){
    const [amount, setAmount] = useState("");
    const [toAccount, setToAccount] = useState("");
    return(
        <div className="flex items-center justify-center h-screen bg-gray-200">
            <div className="bg-white py-7 px-8 rounded-lg shadow-md w-96 h-70">
            <div>
                <InputBox type="number" value={amount} label="Enter Amount" onChange={
                    (e)=>{setAmount(e.target.value);}}/>
            </div>
            <div>
                <InputBox type="text" value={toAccount} label="Find name...." onChange={
                    (e)=>{
                    setToAccount(e.target.value); 
                    }}/>
            </div>
            <Buttoncomponent icon={Sendicon} size="large" varient="primary" children="Send"
            onClickhandler={async()=>{
                await axios.post("http:localhost:300/api/v1/accounts/transfer",{
                    amount:amount,
                    to:toAccount
                }).then((response)=>{
                    console.log("Money sent successfully", response.data);
                })
            } 
            }/>
            </div>
        </div>
    )
}
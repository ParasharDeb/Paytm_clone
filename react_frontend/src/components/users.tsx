import { useEffect, useState } from "react";
import InputBox from "./inputbox";
import axios from "axios";
import User from "./User";

export default function Historybox(){
    const [searchaccounts, setsearchaccounts] = useState("");
    const [users,setusers] = useState([]);
    useEffect(()=>{
        axios.get(`http://localhost:3000/api/v1/user/bulk?filter=${searchaccounts}`)
        .then(response=>{
            setusers(response.data.user)
        })
    },[searchaccounts])
    return(
        <div className="bg-white shadow-lg rounded-lg  h-full ml-2">
            <InputBox type="text" value={searchaccounts} label="Search Accounts" onChange={(e)=>{
                setsearchaccounts(e.target.value);
            }}/>
            <div>
                {users.map(user=><User user={user}/>)}
            </div>
        </div>
    )
}
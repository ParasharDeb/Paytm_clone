import { useEffect, useState } from "react";
import axios from "axios";

function AccountBalance() {
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.get("http://localhost:3000/api/v1/accounts/balance", {
      headers: {
        Authorization: "Bearer " + token
      }
    })
    .then(response => setBalance(response.data.balance))
    .catch(error => console.error(error));
  }, []);

  return (
    <div>
      {balance !== null ? (
        <p>Your balance is: ₹{balance}</p>
      ) : (
        <p>Loading balance...</p>
      )}
    </div>
  );
}

export default AccountBalance;
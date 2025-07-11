import Accountsicon from "../Icons/accounts"
import Helpicon from "../Icons/help"
import History from "../Icons/history"
import Homeicon from "../Icons/home"
import Logouticon from "../Icons/logout"
import Settingsicon from "../Icons/settings"

export default function Leftnavbar(){
    const styles= "py-6 px-4 flex items-center gap-2 cursor-pointer hover:bg-gray-200 rounded-lg"
    return(
        <div >
            <div className={styles}><Homeicon/><div>Home</div></div>
            <div className={styles}><History/>History</div>
            <div className={styles}><Accountsicon/>Acounts</div>
            <div className={styles}><Settingsicon/>Settings</div>
            <div className={styles}><Helpicon/>Help</div>
            <div className={styles}><Logouticon/>Logout</div>
        </div>
    )
}
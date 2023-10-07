
import styles from "../styles/main.module.css";
import { useNavigate } from "react-router-dom";

const Main = () => {
    const navigate = useNavigate();
    const checkToken = () => {
        const userToken = JSON.parse(localStorage.getItem("auth-user")) || "";
        const googleAuthToken = JSON.parse(localStorage.getItem("auth-google-user")) || "";
        if (userToken === "" && googleAuthToken === "") {
            navigate("/Login");
        }
        else {
            navigate("/Home");
        }



    }
    return (
        <>
            <div>
                <h1>Welcome To <span>HealthSphere</span></h1>
                <button onClick={checkToken}>Consult Our Specialists</button>
            </div>

        </>
    )
}
export default Main;
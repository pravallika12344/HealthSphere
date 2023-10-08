import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
const Home = () => {
	const navigate = useNavigate();
	const signout = async () => {
		await signOut(auth);
		navigate("/Login");
		localStorage.removeItem("auth-user");
		localStorage.removeItem("auth-google-user");
	};
	return (
		<>
			<h1>Home</h1>
			<button onClick={signout}>Sign Out</button>
		</>
	);
};
export default Home;

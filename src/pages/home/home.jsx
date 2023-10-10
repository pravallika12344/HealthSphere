import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
const Home = () => {
	const navigate = useNavigate();

	return (
		<>
			<Navbar />
			<h1>Home</h1>
		</>
	);
};
export default Home;

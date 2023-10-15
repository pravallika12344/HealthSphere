import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import stethoscope from "../../images/stethoscope (1).png"
import Consult from "../consultation/consult";
import styles from "./home.module.css";
const Home = () => {
	const navigate = useNavigate();

	return (
		<>
			<Navbar />
			<section>
				<div>
					<h1>Book An Appointment</h1>
					<p>Welcome to our Health Sphere's Appointment Page, where your journey to personalized care begins
						with a simple click. We understand the value of your time and well-being,
						which is why we've designed an intuitive and user-friendly platform for
						scheduling your consultations. Our appointment page empowers you to take
						control of your healthcare journey effortlessly.To ensure the most comprehensive care,
						we invite you to share relevant details about your medical history and specific
						concerns during the booking process.</p>
					<button onClick={() => {
						navigate("/Consult")
					}}>Consult Now<img className={styles.icon} src={stethoscope} /></button>
				</div>
				<div>
					<h1>Get your ABHA Card</h1>
				</div>
			</section>
		</>
	);
};
export default Home;

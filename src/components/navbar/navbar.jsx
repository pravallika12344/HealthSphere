import defaulticon from "../../images/user.png";
import dropdown from "../../images/dropdown.png";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { auth } from "../../firebase";
import styles from "./navbar.module.css";
import { UserContext } from "../../context/usercontext";

const Navbar = () => {
	const navigate = useNavigate();
	const { userData } = useContext(UserContext);
	const userEmail = userData?.user?.email;

	console.log(userEmail);

	const [isDropDownOpen, setIsDropDownOpen] = useState(false);

	const signout = async () => {
		await signOut(auth);
		navigate("/Login");
		localStorage.removeItem("auth-user");
		localStorage.removeItem("auth-google-user");
		localStorage.removeItem("userDetails");
	};

	return (
		<>
			<nav className={styles.navbar}>
				<div className={styles.headingBox}>
					<h1 className={styles.heading}>Health Sphere</h1>
				</div>
				<div className={styles.profileBox}>
					<div className={styles.photo}>
						<div className={styles.imageWrapper}>
							<img
								src={defaulticon}
								alt="Your Photo "
							/>
						</div>
					</div>
					<div className={styles.dropdown}>
						<img
							src={dropdown}
							onClick={() => {
								setIsDropDownOpen(
									!isDropDownOpen
								);
							}}
							alt="dropdown"
						/>
					</div>
				</div>
				{isDropDownOpen && (
					<div className={styles.dropdownBox}>
						<button
							className={styles.profileBtn}
							onClick={() => {
								navigate("/Profile");
							}}
						>
							Profile
						</button>
						<button
							className={styles.signOutBtn}
							onClick={signout}
						>
							Sign Out
						</button>
					</div>
				)}
			</nav>
		</>
	);
};

export default Navbar;

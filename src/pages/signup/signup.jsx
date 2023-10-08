import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import styles from "../signup/signup.module.css";
import { useNavigate } from "react-router-dom";
import healthill2 from "../../images/healthill2.svg";

const SignUp = () => {
	const navigate = useNavigate();
	const [name, setName] = useState("");

	const [email, setEmail] = useState("");

	const [password, setPassword] = useState("");

	const [confirmPassword, setConfirmPassword] = useState("");

	const signup = async (e) => {
		e.preventDefault();
		try {
			const authuser = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);
			console.log(authuser.user.refreshToken);
			localStorage.setItem(
				"auth-user",
				JSON.stringify(authuser.user.refreshToken)
			);
			navigate("/Onboarding");
		} catch (error) {
			console.log(error.message);
		}
	};

	// const handleGoogleSignup = async () => {
	//     try {
	//         const authGoogleUser = await signInWithPopup(auth, provider);
	//         console.log(authGoogleUser);
	//         console.log("succesfully logged in ");
	//         localStorage.setItem("auth-google-user", JSON.stringify(authGoogleUser.user.refreshToken))
	//         navigate("/Login");
	//     }
	//     catch (error) {
	//         console.log(error.message);
	//     }
	// }

	return (
		<>
			<section className={styles.section}>
				<div className={styles.container}>
					<div className={styles.leftContainer}>
						<div className={styles.signUpForm}>
							<div
								className={
									styles.headingcontainer
								}
							>
								<h1 className={styles.heading}>
									Sign Up
								</h1>
							</div>
							<form
								onSubmit={signup}
								className={styles.form}
							>
								<input
									type="text"
									name="name"
									id="name"
									placeholder="Full Name"
									value={name}
									onChange={(e) =>
										setName(
											e.target.value
										)
									}
								/>

								<input
									type="email"
									name="email"
									id="email"
									placeholder="Email"
									value={email}
									onChange={(e) =>
										setEmail(
											e.target.value
										)
									}
								/>

								<input
									type="password"
									name="password"
									id="password"
									placeholder="Create New Password"
									value={password}
									onChange={(e) =>
										setPassword(
											e.target.value
										)
									}
								/>

								<input
									type="password"
									name="confirmPassword"
									id="CnfPassword"
									placeholder="Confirm Password"
									value={confirmPassword}
									onChange={(e) =>
										setConfirmPassword(
											e.target.value
										)
									}
								/>

								<button
									type="submit"
									onClick={signup}
								>
									Sign up
								</button>
							</form>
						</div>
						<div className={styles.alreadHaveAccount}>
							<p
								className={
									styles.alreadHaveAccountText
								}
							>
								Already have an account?
							</p>
							<button
								onClick={() => {
									navigate("/Login");
								}}
								className={styles.signInBtn}
							>
								Sign In
							</button>
						</div>
					</div>
					<div className={styles.rightContainer}>
						<img src={healthill2} alt="healthill" />
					</div>
				</div>
			</section>
		</>
	);
};
export default SignUp;

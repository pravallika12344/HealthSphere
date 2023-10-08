import styles from "../login/login.module.css";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import healthill from "../../images/healthill.svg";
import googleIcon from "../../images/google-icon.svg";

const Login = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const handlelogin = async (e) => {
		e.preventDefault();
		try {
			const authuser = await signInWithEmailAndPassword(
				auth,
				email,
				password
			);
			console.log("succesfully logged in ");
			console.log(authuser);
			localStorage.setItem(
				"auth-user",
				JSON.stringify(authuser.user.refreshToken)
			);
			navigate("/Home");
		} catch (error) {
			console.log(error.message);
		}
	};
	const handleGoogleLogin = async () => {
		try {
			const authGoogleUser = await signInWithPopup(auth, provider);
			localStorage.setItem(
				"auth-google-user",
				JSON.stringify(authGoogleUser.user.refreshToken)
			);
			navigate("/Home");
		} catch (error) {
			console.log(error.message);
		}
	};
	useEffect(() => {
		setEmail("");
		setPassword("");
	}, []);
	return (
		<>
			<section className={styles.section}>
				<div className={styles.container}>
					<div className={styles.leftContainer}>
						<img src={healthill} alt="healthill" />
					</div>
					<div className={styles.rightContainer}>
						<div className={styles.loginForm}>
							<div
								className={
									styles.headingcontainer
								}
							>
								<h1 className={styles.heading}>
									Sign In
								</h1>
							</div>
							<form
								onSubmit={handlelogin}
								className={styles.form}
							>
								<input
									value={email}
									type="text"
									onChange={(e) => {
										setEmail(
											e.target.value
										);
									}}
									placeholder="Enter your email"
								/>
								<input
									value={password}
									type="password"
									onChange={(e) => {
										setPassword(
											e.target.value
										);
									}}
									placeholder="Enter Password"
								/>
								<button
									type="submit"
									onClick={handlelogin}
								>
									Sign In
								</button>
							</form>
						</div>
						<p className={styles.orText}>or</p>
						<div className={styles.createAccount}>
							<div className={styles.signin}>
								<img
									className={
										styles.signinImg
									}
									src={googleIcon}
									alt="googleIcon"
								/>
								<button
									onClick={
										handleGoogleLogin
									}
								>
									Continue with Google
								</button>
							</div>
							<div>
								<p
									className={
										styles.createAccountText
									}
								>
									Create new account
								</p>
								<button
									className={
										styles.signUpBtn
									}
									onClick={() => {
										navigate("/SignUp");
									}}
								>
									Sign Up
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
export default Login;

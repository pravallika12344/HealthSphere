import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import Styles from "../styles/signup.module.css";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [confirmPassword, setConfirmPassword] = useState("");

    const signup = async (e) => {
        e.preventDefault();
        try {
            const authuser = await createUserWithEmailAndPassword(auth, email, password);
            console.log(authuser.user.refreshToken);
            localStorage.setItem("auth-user", JSON.stringify(authuser.user.refreshToken))
            navigate("/Onboarding");
        }
        catch (error) {
            console.log(error.message);
        }
    }

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
            <section>
                <div>
                    <div>
                        <h1>Sign Up</h1>
                    </div>
                    <div>

                        <form onSubmit={signup} className={Styles.loginSection}>
                            <input
                                className={Styles.input}
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Full Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)} />

                            <input
                                className={Styles.input}
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} />

                            <input
                                className={Styles.input}
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Create New Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} />

                            <input
                                className={Styles.input}
                                type="password"
                                name="confirmPassword"
                                id="CnfPassword"
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)} />

                            <button type="submit" onClick={signup} className={Styles.buttonLrg}>
                                sign up
                            </button>
                        </form>
                    </div>
                    <div>
                        <p>Already have an account?</p>
                        <button onClick={() => {
                            navigate("/Login")
                        }}>Sign In</button>
                    </div>
                </div>
            </section>
        </>


    )
}
export default SignUp;


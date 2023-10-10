import "./App.css";
import Main from "./pages/main/main";
import Login from "./pages/login/login";
import SignUp from "./pages/signup/signup";
import Home from "./pages/home/home";
import Onboarding from "./pages/onboarding/onboarding";
import Profile from "./pages/userprofile/profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContextProvider } from "./context/usercontext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
	return (
		<>
			<UserContextProvider>
				<BrowserRouter>
					<ToastContainer
						position="top-center"
						autoClose={5000}
						hideProgressBar={false}
						newestOnTop={false}
						closeOnClick
						rtl={false}
						pauseOnFocusLoss
						draggable
						pauseOnHover
						theme="light"
					/>
					<Routes>
						<Route
							path="/"
							element={<Main />}></Route>
						<Route
							path="/Login"
							element={<Login />}></Route>
						<Route
							path="/SignUp"
							element={<SignUp />}></Route>
						<Route
							path="/Home"
							element={<Home />}></Route>
						<Route
							path="/Onboarding"
							element={<Onboarding />}></Route>
						<Route
							path="/Profile"
							element={<Profile />}></Route>
					</Routes>
				</BrowserRouter>
			</UserContextProvider>
		</>
	);
};

export default App;

import "./App.css";
import Main from "./pages/main/main";
import Login from "./pages/login/login";
import SignUp from "./pages/signup/signup";
import Home from "./pages/home/home";
import Onboarding from "./pages/onboarding/onboarding";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContextProvider } from "./context/usercontext";

const App = () => {
	return (
		<>
			<UserContextProvider>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Main />}></Route>
						<Route
							path="/Login"
							element={<Login />}
						></Route>
						<Route
							path="/SignUp"
							element={<SignUp />}
						></Route>
						<Route
							path="/Home"
							element={<Home />}
						></Route>
						<Route
							path="/Onboarding"
							element={<Onboarding />}
						></Route>
					</Routes>
				</BrowserRouter>
			</UserContextProvider>
		</>
	);
};

export default App;

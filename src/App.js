
import './App.css';
import Main from "./pages/main";
import Login from "./pages/login";
import SignUp from './pages/signup';
import Home from "./pages/home";
import Onboarding from "./pages/onboarding/onboarding"
import { BrowserRouter, Routes, Route } from "react-router-dom";



const App = () => {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} ></Route>
          <Route path='/Login' element={<Login />}></Route>
          <Route path='/SignUp' element={<SignUp />}></Route>
          <Route path='/Home' element={<Home />}></Route>
          <Route path='/Onboarding' element={<Onboarding />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;

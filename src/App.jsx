import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login';
import SignUp from './SignUp';
import HomePage from './HomePage';
import ProductTabs from './ProductTabs';
import ProtectedRoute from "./ProtectedRoute"
import HomePageBeforeLogin from './HomePageBeforeLogin';
import Logout from './Logout';
import OTP from './OTP';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePageBeforeLogin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/email-verify" element={< OTP />} />
        <Route path="/khaaonow" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
        <Route path="/logout" element={<Logout />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

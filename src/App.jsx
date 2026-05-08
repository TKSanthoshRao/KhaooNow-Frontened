import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Login";
import SignUp from "./SignUp";
import OTP from "./OTP";
import Logout from "./Logout";

import HomePage from "./HomePage";
import HomePageBeforeLogin from "./HomePageBeforeLogin";

import OnboardingList from "./OnboardingList";
import OnboardingDetail from "./OnboardingDetail";
import RestaurantMenu from "./RestaurantMenu";

import ProtectedRoute from "./ProtectedRoute";
import MainLayout from "./MainLayout";

import {CartProvider} from "./context/CartContext"
import { AuthProvider } from "./context/AuthContext";
import CheckOut from "./cart/CheckOut";


function App() {
  return (
    <AuthProvider>
    <CartProvider>
    <BrowserRouter>
      <Routes>

        {/* Public Pages - No Navbar */}
        <Route path="/" element={<HomePageBeforeLogin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/email-verify" element={<OTP />} />
        <Route path="/logout" element={<Logout />} />

        <Route
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/khaaonow" element={<HomePage />} />
          <Route path="/onboarding" element={<OnboardingList />} />
          <Route path="/onboarding/:id/*" element={<OnboardingDetail />} />
          <Route
            path="/restaurant/:restaurantid/menu/*"
            element={<RestaurantMenu />}
          />
        </Route>
        <Route path="/checkout" element={<CheckOut/>}></Route>

      </Routes>
    </BrowserRouter>
    </CartProvider>
    </AuthProvider>
  );
}

export default App;
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./ProfileMenu.css";

import {useAuth} from "./context/AuthContext"

export default function ProfileMenu({ LoggedInuser }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const { authUser } = useAuth();

  const user = {
    name: authUser?.fullName || "Guest",
    email: authUser?.email || "guest@dummy.com",
    profilePic: authUser?.imageUrl || "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"

  };

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("token"); // important
    navigate("/logout");
  };

  return (
    <div className="profile-menu" ref={dropdownRef}>

      {/* Profile Trigger */}
      <div className="profile-trigger" onClick={() => setOpen(!open)}>
        <div className="profileicon">

          <img
            src={user.profilePic}
            alt="profile"
            className="profile-img"
          />

          <span className="profile-name">
            {user.name || "Guest"}
          </span>

        </div>
      </div>

      {/* Dropdown */}
      {open && (
        <div className="dropdown">

          <p className="dropdown-email">
            {user.email}
          </p>

          <hr />

          <button className="dropdown-item">
            My Profile
          </button>

          <button className="dropdown-item">
            Orders
          </button>

          <button
            className="dropdown-item logout"
            onClick={handleLogout}
          >
            Logout
          </button>

        </div>
      )}

    </div>
  );
}
import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";

import { loggedInUser } from "../service/AuthService";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const initializeUser = async () => {
    try {
      const data = await loggedInUser();
      setAuthUser(data);
    } catch (error) {
      console.log(error);
      setAuthUser(null);
    } finally {
      setLoading(false);
    }
  };
   const clearAuthUser = () => {
    setAuthUser(null);
  };


  useEffect(() => {
    initializeUser();
  }, []);

  return (
    <AuthContext.Provider
  value={{
    authUser,
    loading,
    clearAuthUser,
    initializeUser
  }}
>
      {children}
    </AuthContext.Provider>
  );
}

 export function useAuth() {
  return useContext(AuthContext);
}
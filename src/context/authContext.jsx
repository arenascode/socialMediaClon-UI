import { createContext, useEffect, useState } from "react";
import propTypes from "prop-types";

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {

  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

  const login = () => {
    // TO DO
    setCurrentUser({
      id: 1,
      name: "Migue",
      profilePic:
        "https://images.pexels.com/photos/18869171/pexels-photo-18869171/free-photo-of-contemplando.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    });
  }

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser))
  }, [currentUser])

  return (
    <AuthContext.Provider value={{currentUser, login}}>
      {children}
    </AuthContext.Provider>
  )
  
}

AuthContextProvider.propTypes = {
  children: propTypes.node.isRequired,
};
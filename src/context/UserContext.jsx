import React, { createContext, useContext, useEffect, useState } from "react";
import { userState } from "../api/firebase";

const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [user, setUser] = useState();
  useEffect(() => {
    userState((currentUser) => {
      setUser(currentUser);
    });
  }, []);
  return (
    <UserContext.Provider value={{ user, uid: user && user.uid, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}

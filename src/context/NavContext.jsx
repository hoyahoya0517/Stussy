import React, { createContext, useContext, useState } from "react";

const NavContext = createContext();

export function NavContextProvider({ children }) {
  const [onSideMenu, setOnSideMenu] = useState(false);
  const [onSideBag, setOnSideBag] = useState(false);
  return (
    <NavContext.Provider
      value={{ onSideMenu, setOnSideMenu, onSideBag, setOnSideBag }}
    >
      {children}
    </NavContext.Provider>
  );
}

export function useNavContext() {
  return useContext(NavContext);
}

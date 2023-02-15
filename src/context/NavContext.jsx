import React, { createContext, useContext, useRef, useState } from "react";

const NavContext = createContext();

export function NavContextProvider({ children }) {
  const [onSideMenu, setOnSideMenu] = useState(false);
  const [onSideBag, setOnSideBag] = useState(false);
  const navRef = useRef();
  return (
    <NavContext.Provider
      value={{ onSideMenu, setOnSideMenu, onSideBag, setOnSideBag, navRef }}
    >
      {children}
    </NavContext.Provider>
  );
}

export function useNavContext() {
  return useContext(NavContext);
}

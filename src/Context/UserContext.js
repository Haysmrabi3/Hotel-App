"use client";
import { createContext } from "react";
import { useState } from "react";








export const UserContext = createContext(null);







export default function UserProvider({ children }) {
  const [userLoged, setUserLoged] = useState(false);

  return (
    <UserContext.Provider value={{ userLoged, setUserLoged }}>
      {children}
    </UserContext.Provider>
  );
}
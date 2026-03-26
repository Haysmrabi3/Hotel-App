"use client";
import { createContext } from "react";
import { useState } from "react";








export const RoomContext = createContext([]);







export default function RoomProvider({ children }) {








  const [roomDetails, setRoomDetails] = useState([]);

  return (
    <RoomContext.Provider value={{ roomDetails, setRoomDetails }}>
      {children}
    </RoomContext.Provider>
  );
}
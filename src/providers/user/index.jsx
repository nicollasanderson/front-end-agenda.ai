import { createContext, useContext, useState } from "react";

const UserContext = createContext("");

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("@agendaai:user")) || null
  );

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const UsedUserrovider = () => useContext(UserContext);

import { createContext, useContext, useState } from "react";
import { jwtDecode } from "jwt-decode";

const UserContext = createContext("");

export const UserProvider = ({ children }) => {
  const token = localStorage.getItem("@agendaai:token") || "";

  try {
    var decode = jwtDecode(token);
  } catch (err) {
    // console.log(err);
  }
  const userObjt = decode;

  const [user, setUser] = useState(userObjt);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const UsedUserrovider = () => useContext(UserContext);

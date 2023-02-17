import { createContext, useContext, useState } from "react";
import jwt_decode from "jwt-decode";

const UserContext = createContext("");

export const UserProvider = ({ children }) => {
  const token = localStorage.getItem("@agendaai:token") || null;

  try {
    var decode = jwt_decode(token);
  } catch (err) {
    console.log(err);
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

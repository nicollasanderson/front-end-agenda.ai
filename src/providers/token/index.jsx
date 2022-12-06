import { createContext, useContext, useState } from "react";

const TokenContext = createContext("");

export const TokenProvider = ({ children }) => {
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("@agendaai:token")) || null
  );

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
};

export const UseTokenProvider = () => useContext(TokenContext);

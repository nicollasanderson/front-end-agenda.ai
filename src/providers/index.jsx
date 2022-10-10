import { TokenProvider } from "./token";
import { UserProvider } from "./user";

const Providers = ({ children }) => {
  return (
    <TokenProvider>
      <UserProvider>{children}</UserProvider>
    </TokenProvider>
  );
};

export default Providers;

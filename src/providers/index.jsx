import { ScheduleProvider } from "./schedules";
import { TokenProvider } from "./token";
import { UserProvider } from "./user";

const Providers = ({ children }) => {
  return (
    <TokenProvider>
      <UserProvider>
        <ScheduleProvider>{children}</ScheduleProvider>
      </UserProvider>
    </TokenProvider>
  );
};

export default Providers;

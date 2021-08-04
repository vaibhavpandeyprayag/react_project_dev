import { createContext } from "react";
import { User } from "./modals/User";

interface AppContextData {
  user?: User;
  setUser: (u: User) => void;
}

const AppContext = createContext<AppContextData>({
  user: undefined,
  setUser: function (u) {
    this.user = u;
  },
});

export default AppContext;

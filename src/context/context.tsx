import { createContext, useState, ReactNode } from "react";

interface UserContextType {
  isLoggedIn: boolean;
  setLoggedIn: (value: boolean) => void;
}

export const UserContext = createContext<UserContextType>({
  isLoggedIn: false,
  setLoggedIn: () => {},
});

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const setLoggedIn = (value: boolean) => {
    setIsLoggedIn(value);
  };
  return (
    <UserContext.Provider value={{ isLoggedIn, setLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};

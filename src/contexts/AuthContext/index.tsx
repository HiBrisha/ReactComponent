import React, { useState, ReactNode } from "react";

// Define the AuthContext type
interface AuthContextType = {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
};

// Create auth context
export const authContext = React.createContext<AuthContextType>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});

// Define the props type for AuthContextProvider
type AuthContextProviderProps = {
  children: ReactNode;
};

// Create AuthContextProvider
export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
  // Defined state and logic in AuthContextProvider
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const contextValue: AuthContextType = {
    isLoggedIn,
    setIsLoggedIn,
  };

  return (
    <authContext.Provider value={contextValue}>
      {children}
    </authContext.Provider>
  );
};

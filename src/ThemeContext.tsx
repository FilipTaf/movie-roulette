import React, {
  createContext,
  FC,
  ReactNode,
  SetStateAction,
  useState,
  Dispatch,
  useContext,
} from "react";

interface ThemeContextType {
  theme: "light" | "dark";
  setTheme: Dispatch<SetStateAction<"light" | "dark">>;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  setTheme: () => {},
});

interface Props {
  children: ReactNode;
  initial?: "light" | "dark";
}

export const ThemeContextProvider: FC<Props> = ({
  children,
  initial = "light",
}) => {
  const [theme, setTheme] = useState(initial);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

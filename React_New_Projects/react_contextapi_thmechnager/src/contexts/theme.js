import { createContext, useContext } from "react";

export const ThemeContext = createContext(
    {
        themeMode: "light",
        darkTheme: () => { },
        lightTheme: () => { },
    }
);

export const ThemeProvider = ThemeContext.Provider


// Hook for use Theme context
export default function useTheme() {
    return useContext(ThemeContext);
}
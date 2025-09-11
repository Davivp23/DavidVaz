import { createContext, useState, useEffect, useContext } from "react";

const ThemeContext = createContext();

export function ThemeProv({ children }) {
    const [darkM, setDarkM] = useState(() => {
        if (localStorage.getItem("theme")) {
            return localStorage.getiItem("theme") === "dark";
        }
        return window.watchMedia("(prefers-color-scheme: dark)").matches;
    });

    useEffect(() => {
        if (darkM) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkM]);

    return (
        <ThemeContext.Provider value={{ darkM, setDarkM }}>
            { children }
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);
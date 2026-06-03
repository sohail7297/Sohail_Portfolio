import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeToggle() {

  const {
    darkMode,
    setDarkMode
  } = useContext(ThemeContext);

  return (

    <button
      onClick={() =>
      setDarkMode(!darkMode)}
      className="px-4 py-2 rounded-full border"
    >
      {darkMode ? "☀️" : "🌙"}
    </button>

  );
}
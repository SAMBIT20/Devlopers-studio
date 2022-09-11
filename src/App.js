import { createContext, useState } from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Tutorials from "./pages/Tutorials";

// Create Context
export const ThemeContext = createContext();

function App() {
  const [isDark, setIsDark] = useState(true);

  const value = {
    isDark,
    setIsDark,
  };

  return (
    <ThemeContext.Provider value={value}>
      <div className={isDark ? "dark" : "light-body"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tutorials" element={<Tutorials />} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

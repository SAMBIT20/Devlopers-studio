import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../App";
import { LogoIcon, MoonIcon, SunIcon } from "./assets/icons";

const Header = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);
  return (
    <header className={isDark ? "header" : "header-light"}>
      <div className="container">
        <div className="logo-wrapper">
          <Link to={"/"} className="logo">
            <LogoIcon />
            <span>DeveloperStudio</span>
          </Link>
          <button onClick={() => setIsDark(!isDark)} className="icon">
            {isDark ? <MoonIcon /> : <SunIcon />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

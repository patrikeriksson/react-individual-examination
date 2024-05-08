import { NavLink } from "react-router-dom";
import "../styles/NavBar.css";

function NavBar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">About</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37259 0 0 5.37258 0 12C0 18.6274 5.37259 24 12 24ZM7.79048 22.1627C9.12506 22.7155 10.5555 23 12 23V12V0.999999C10.5555 0.999999 9.12506 1.28452 7.79048 1.83732C6.4559 2.39013 5.24327 3.20038 4.22183 4.22182C3.20038 5.24327 2.39012 6.4559 1.83733 7.79048C1.28453 9.12506 1 10.5555 1 12C1 13.4445 1.28453 14.8749 1.83733 16.2095C2.39012 17.5441 3.20038 18.7567 4.22183 19.7782C5.24327 20.7996 6.4559 21.6099 7.79048 22.1627Z"
                fill="white"
              />
            </svg>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;

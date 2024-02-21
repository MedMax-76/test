import logo from "../img/KM_1 1.svg";
import { Link } from "react-router-dom";
import Main from "./Main";

const Page11 = () => {
  return (
    <body>
      <nav className="nav-km">
        <div className="nav-row">
          <Link to="/">
            <img className="nav-row-logo-img" src={logo} alt="Logp Maks" />
          </Link>
          <ul className="nav-list">
            <li className="nav-list__item">
              <Link to="/" className="nav-list__link">
                Back
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Main />
    </body>
  );
};

export default Page11;

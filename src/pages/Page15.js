import Main from "./Main";
import logo from "../img/Logo_001_tran 1.svg";
import { Link } from "react-router-dom";

const Page15 = () => {
  return (
    <body>
      <nav className="nav-km">
        <div className="nav-row">
          <Link to="/">
            <img className="nav-row-logo-img-km" src={logo} alt="Logp Maks" />
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

export default Page15;

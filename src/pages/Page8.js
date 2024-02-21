import { Link } from "react-router-dom";
import Main from "./Main";
import logo from "../img/Logo_white_transparent.png";

const Page8 = () => {
  return (
    <body>
      <nav className="nav">
        <div className="nav-row">
          <Link to="/">
            <img className="nav-row-logo-img-hand" src={logo} alt="Logp Maks" />
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

export default Page8;

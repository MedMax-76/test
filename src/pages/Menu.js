import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <div className="menu">
        <ul className="menu-list">
          <li>
            <Link to="Logo1Gold" className="menu-list-item">
              Logo 1 gold
            </Link>
          </li>
          <li>
            <Link to="Logo1Black" className="menu-list-item">
              Logo 1 black
            </Link>
          </li>
          <li>
            <Link to="Logo1White" className="menu-list-item">
              Logo 1 white
            </Link>
          </li>
          <li>
            <Link to="Logo2Gold" className="menu-list-item">
              Logo 2 gold
            </Link>
          </li>
          <li>
            <Link to="Logo2Black" className="menu-list-item">
              Logo 2 black
            </Link>
          </li>
          <li>
            <Link to="Logo2White" className="menu-list-item">
              Logo 2 white
            </Link>
          </li>
          <li>
            <Link to="HandBlack" className="menu-list-item">
              Hand black
            </Link>
          </li>
          <li>
            <Link to="HandWhite" className="menu-list-item">
              Hand white
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Menu;

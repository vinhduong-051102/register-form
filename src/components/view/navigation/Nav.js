import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-light ">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <div className="nav-link">
              <Link to="/">Home</Link>
            </div>
          </li>
          <li className="nav-item">
            <div className="nav-link">
              <Link to="/resgister">Sign up</Link>
            </div>
          </li>
          <li className="nav-item">
            <div className="nav-link">
              <Link to="/log_in">Sign in</Link>
            </div>
          </li>
          <li className="nav-item">
            <div className="nav-link">
              <Link to="/table">List users</Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;

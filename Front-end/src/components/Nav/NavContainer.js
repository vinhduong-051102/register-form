const NavContainer = ({ children }) => {
  return (
    <nav className="navbar navbar-expand-sm bg-light fixed-top">
      <div className="container-fluid">
        <ul className="navbar-nav">
          {children.map((child, index) => {
            return (
              <li className="nav-item" key={index}>
                <div className="nav-link">{child}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavContainer;

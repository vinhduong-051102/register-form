import { Link } from "react-router-dom";
import NavContainer from "../../components/Nav/NavContainer";
const Nav = () => {
  return (
    <NavContainer>
      <Link to="/">Home</Link>
      <Link to="/resgister">Sign up</Link>
      <Link to="/log_in">Sign in</Link>
      <Link to="/table">List users</Link>
    </NavContainer>
  );
};

export default Nav;

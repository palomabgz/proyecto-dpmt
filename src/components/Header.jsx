import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import { toast } from "react-toastify";
const Header = () => {
  const { isLogged, setIsLogged,setAccessToken,setRefreshToken } = useContext(AuthContext);

  const links = [{ to: "/", text: "inicio" }];
  const linksLogin = [
    { to: "/mis-blogs", text: "Blogs" },
    { to: "/crear-blog", text: "crear Blog" },
  ];
  const linksLogout = [
    { to: "/login", text: "Login" },
    { to: "/register", text: "register" },
  ];

const handleLogout = () => {
  setIsLogged(false);
  setAccessToken(null);
  setRefreshToken(null);
  toast.success("Logout");
};

  return (
    <nav className="topnav">
      <div className="links-start">
        {links.map((link) => (
          <Link key={link.to} to={link.to}>
            {link.text}
          </Link>
        ))}
      </div>
      <div className="links-end">
        {isLogged &&
          linksLogin.map((link) => (
            <Link key={link.to} to={link.to}>
              {link.text}
            </Link>
          ))}
        {isLogged && <a onClick={() => handleLogout()}>Cerrar Sesion</a>}
        {!isLogged &&
          linksLogout.map((link) => (
            <Link key={link.to} to={link.to}>
              <FontAwesomeIcon icon={faHouse} className="icono" />
              {link.text}
            </Link>
          ))}
      </div>
    </nav>
  );
};

export default Header;

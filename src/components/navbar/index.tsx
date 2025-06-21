import { useDispatch } from "react-redux";
import logo from "../../assets/Logo.svg";
import search from "../../assets/search.svg";
import shop from "../../assets/shop.svg";
import logout from "../../assets/Logout.svg";
import "../navbar/navbar.scss";
import { setOpenAuthorizationModal } from "../../redux/modal-slice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Badge } from "antd";
import { useReduxSelector } from "../../hooks/useRedux";
const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("Login");
  const token = localStorage.getItem("token")
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (user.name) setName(user.name);
    }
  }, []);
  const { data } = useReduxSelector((state) => state.cardSlice);
  return (
    <div className="navbar">
      <div className="container">
        <div className="wrapper">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="list">
            <a href="#" onClick={() => navigate("/")}>
              Home
            </a>
            <a href="#">Shop</a>
            <a href="#">Plant Care</a>
            <a href="#" onClick={() => navigate("/blog")}>
              Blogs
            </a>
          </div>
          <div className="left">
            <div className="search">
              <img src={search} alt="" />
            </div>
            <div className="shop" onClick={() => navigate("/shop")}>
              <Badge count={data.length}>
                <img src={shop} alt="" />
              </Badge>
            </div>
            <button
              className="btn"
              onClick={() => {
                token
                  ? navigate("/profil")
                  : dispatch(setOpenAuthorizationModal());
              }}
            >
              {" "}
              <img src={logout} alt="" /> {name}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

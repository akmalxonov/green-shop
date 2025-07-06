import { Menu, type MenuProps } from "antd";
import { LuUserRound } from "react-icons/lu";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoLocationOutline } from "react-icons/io5";
import { Outlet, useNavigate } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineFormatListNumbered } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import "../profil-comp/profil.scss";
import { useDispatch } from "react-redux";
import { setOpenLogOutModal } from "../../redux/modal-slice"; // 🔁 PATH TO‘G‘RI BO‘LSIN
import { MenuFoldOutlined } from "@ant-design/icons";
import { useState } from "react";

type MenuItem = Required<MenuProps>["items"][number];

const ProfilComp: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch(); // ✅ ichkariga olib keldik

  const onClick: MenuProps["onClick"] = (e) => {
    const key = e.key;
    const routes: Record<string, string> = {
      "1": "account-details",
      "2": "my-product",
      "3": "address",
      "4": "wishlist",
      "5": "track-order",
    };

    if (key === "6") {
      dispatch(setOpenLogOutModal(true)); // ✅ Modalni ochish
    } else {
      const path = routes[key];
      if (path) navigate(path);
    }
  };

  const items: MenuItem[] = [
    {
      key: "g1",
      type: "group",
      children: [
        { key: "1", label: "Account Details", icon: <LuUserRound /> },
        { key: "2", label: "My Products", icon: <HiOutlineShoppingBag /> },
        { key: "3", label: "Address", icon: <IoLocationOutline /> },
        { key: "4", label: "Wishlist", icon: <FaRegHeart /> },
        {
          key: "5",
          label: "Track Order",
          icon: <MdOutlineFormatListNumbered />,
        },
        { key: "6", label: "Log out", icon: <IoMdLogOut /> },
      ],
    },
  ];
  const [isActive,setIsActive] = useState(false)
  return (
    <div className="profil">
      <div className="container">
        <div className="wrapper">
          <MenuFoldOutlined onClick={()=>setIsActive(!isActive)}  className="hamburger"/>
          <Menu
          
            onClick={onClick}
            className={`sidebar${isActive?"active":""}`}
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={items}
            style={{ fontSize: "16px" }}
          />
          
          <div className="content">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilComp;
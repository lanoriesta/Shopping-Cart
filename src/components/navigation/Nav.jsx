import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import NotificationIcon from "../notifIcon/notificationIcon";

const Nav = ({ navNotif }) => {
  const Cart = useSelector((state) => state.cart);
  const [cartNotif, setCartnotif] = useState(false);
  const handleActiveLink = (isActive) => {
    return isActive ? " text-brownColor font-bold relative" : "text-red-500";
  };

  return (
    <div className="container">
      <nav className="container-nav ">
        <div className="container-title">
          <h1 className="logo-text">
            <Link to={"/"}>
              Shopping<span style={{ color: "#A5AE9E" }}>Cart</span>
            </Link>
          </h1>
        </div>
        <div className="container-link">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? " text-brownColor font-bold" : " text-greyColor"
            }
          >
            <p className="link-home" href="#">
              Home
            </p>
          </NavLink>
        </div>
        <div className="container-link relative">
          <NavLink
            to={"/cart"}
            className={({ isActive }) => handleActiveLink(isActive)}
          >
            <p className="link-cart" href="#">
              Cart
            </p>
          </NavLink>
          {navNotif ? <NotificationIcon cart={Cart} /> : null}
        </div>
      </nav>
    </div>
  );
};

export default Nav;

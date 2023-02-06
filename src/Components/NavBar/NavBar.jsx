import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
    const {pathname} = useLocation()
  return (
    <ul className="nav_root">
      <li className={pathname=='/'?"active":""}><Link to="/">Home</Link></li>
      <li className={pathname=='/transactions'?"active":""}>
        <Link to="/transactions">Transactions</Link>
      </li>
      <li className={pathname=='/add-transaction'?"active":""}>
        <Link to="/add-transaction"> Add Transaction</Link >
        </li>
    </ul>
  );
};

export default NavBar;

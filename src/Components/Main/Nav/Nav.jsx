import React from "react";
import { Link } from "react-router-dom";
import Styles from "../../../Styles/Component-Styles/Nav/Nav.module.css";

const Nav = () => {
  return (
    <div className={Styles.Nav}>
      <div className={Styles.Left_Side}>
        {/* <div className={Styles.Logo_Container}>
                <img src="" alt="" className={Styles.Logo} />
            </div> */}
        <Link to={"/"}>
          <h3 className={Styles.Brand}>Merch</h3>
        </Link>
      </div>

      <ul className={Styles.Navlink_Container}>
        <li className={Styles.NavItem}>
          <Link className={Styles.Navlink} to={"Men"}>
            Men
          </Link>
        </li>
        <li className={Styles.NavItem}>
          <Link className={Styles.Navlink} to={"Women"}>
            Women
          </Link>
        </li>
        <li className={Styles.NavItem}>
          <Link className={Styles.Navlink} to={"Electronics"}>
            Electronics
          </Link>
        </li>
        <li className={Styles.NavItem}>
          <Link className={Styles.Navlink} to={"Jewelery"}>
            Jewelery
          </Link>
        </li>
      </ul>

      <div className={Styles.Right_Side}>
        <Link className={Styles.Navlink} to={"Login"}>
          Login
        </Link>
        <div className={Styles.Profile_Logo_Container}>
          <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pimple-1658939057.png?crop=0.998xw:0.669xh;0.00170xw,0.215xh&resize=640:*" alt="" className={Styles.Profile_Logo} />
        </div>
      </div>
    </div>
  );
};

export default Nav;

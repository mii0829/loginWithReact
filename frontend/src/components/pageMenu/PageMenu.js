import React from "react";
import { NavLink } from "react-router-dom";
import { AdminAuthorLink } from "../protect/hiddenLink";

const PageMenu = () => {
  return (
    <div>
      <nav className="--btn-google --p --mb">
        <ul className="home-links">
          <li>
            <NavLink to="/todo">Todo</NavLink>
          </li>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li>
            <NavLink to="/changePassword">Change Password</NavLink>
          </li>
          {/* //権限のある人にのみ見える。
          //条件分岐は<admingAuthor>で行っている
           */}
          <AdminAuthorLink>
            <li>
              <NavLink to="/users">Users</NavLink>
            </li>
          </AdminAuthorLink>
        </ul>
      </nav>
    </div>
  );
};

export default PageMenu;

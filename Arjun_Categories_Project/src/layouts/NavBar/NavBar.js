import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./NavBar.css";
import "./NavBar.css.map"

const NavBar = () => {
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");
  console.log("splitLocation ....", splitLocation);

  return (
        <div className="Container-2">
          <ul>
            <li>
              <NavLink
                to="/Fruits"
              >
                <button className="button"><b>Fruits</b></button>
              &ensp;
              </NavLink>
            </li>
            <br/>
            <li>
              <NavLink
                to="/PublicPlaces"
              >
                <button className="button"><b>Public Places</b></button>
              &ensp;
              </NavLink>
            </li>
            <br/>
            <li>
              <NavLink
                to="/Flowers"
              >
                <button className="button"><b>Flowers</b></button>
              &ensp;
              </NavLink>
            </li>
            <br/>
            <li>
              <NavLink
                to="/Vegetables"
                className={
                  splitLocation[2] === "lob"
                    ? "page-heading myactive"
                    : "page-heading"
                }
              >
                <button className="button"><b>Vegetables</b></button>
              </NavLink>
              &ensp;
            </li>
            <br/>
            <li>
              <NavLink
                to="/Vehicles"
                className={
                  splitLocation.length <= 2
                    ? "page-heading myactive"
                    : "page-heading"
                }
              >
                <button className="button"><b>Vehicles</b></button>
              </NavLink>
              &ensp;
            </li>
            <br/>
            <li>
              <NavLink
                to="/Animals"
                className={
                  splitLocation.length <= 2
                    ? "page-heading myactive"
                    : "page-heading"
                }
              >
               <button className="button"><b>Animals</b></button> 
              </NavLink>
              &ensp;
            </li>
              <br/>
              <li>
              <NavLink
                to="/Objects"
                className={
                  splitLocation.length <= 2
                    ? "page-heading myactive"
                    : "page-heading"
                }
              >
               <button className="button"><b>Objects</b></button> 
              </NavLink>
              &ensp;
            </li>
              <br/>
              <li>
              <NavLink
                to="/Shapes"
                className={
                  splitLocation.length <= 2
                    ? "page-heading myactive"
                    : "page-heading"
                }
              >
               <button className="button"><b>Shapes</b></button> 
              </NavLink>
              &ensp;
            </li>
              <br/>
              <li>
              <NavLink
                to="/Colors"
                className={
                  splitLocation.length <= 2
                    ? "page-heading myactive"
                    : "page-heading"
                }
              >
               <button className="button"><b>Colors</b></button> 
              </NavLink>
              &ensp;
            </li>
              <br/>
              <li>
              <NavLink
                to="/Feelings"
                className={
                  splitLocation.length <= 2
                    ? "page-heading myactive"
                    : "page-heading"
                }
              >
               <button className="button"><b>Feelings</b></button> 
              </NavLink>
              &ensp;
            </li>
              <br/>
              <li>
              <NavLink
                to="/Birds"
                className={
                  splitLocation.length <= 2
                    ? "page-heading myactive"
                    : "page-heading"
                }
              >
               <button className="button"><b>Birds</b></button> 
              </NavLink>
              &ensp;
            </li>
              <br/>
            {/* <li>
              <NavLink
                to="/GST-Tax/action"
                className={
                  splitLocation[2] === "action"
                    ? "page-heading myactive"
                    : "page-heading"
                }
              >
                Action
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/GST-Tax/role"
                className={
                  splitLocation[2] === "role"
                    ? "page-heading myactive"
                    : "page-heading"
                }
              >
                Role
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/GST-Tax/business-entity"
                className={
                  splitLocation[2] === "business-entity"
                    ? "page-heading myactive"
                    : "page-heading"
                }
              >
                Business Entity
              </NavLink>
              <NavLink
                to="/GST-Tax/repository"
                className={
                  splitLocation[2] === "repository"
                    ? "page-heading myactive"
                    : "page-heading"
                }
              >
                Repository
              </NavLink>
              <NavLink
                to="/GST-Tax/heading"
                className={
                  splitLocation[2] === "heading"
                    ? "page-heading myactive"
                    : "page-heading"
                }
              >
                Heading
              </NavLink>
            </li> */}
          </ul>
        </div>
  );
};
export default NavBar;

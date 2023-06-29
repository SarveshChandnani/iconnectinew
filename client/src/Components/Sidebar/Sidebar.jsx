import React, { useState } from "react";
import "./sidebar.css";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
  FaSearch,
  FaLaptopCode
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = ({ children, deactivate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  console.log(deactivate);
  const menuItem = [
    {
      path: "/MainScreen",
      name: "Dashboard",
      icon: <FaTh />,
      deactivate: { deactivate },
    },
    {
      path: "/MainScreen/Activation",
      name: "Activate Profile",
      icon: <FaUserAlt />,
      deactivate: { deactivate },
    },
    {
      path: "/internshipPosting",
      name: "Post Internships",
      icon: <FaRegChartBar />,
      deactivate: { deactivate },
    },
    {
      path: "/search",
      name: "Search Candidates",
      icon: <FaSearch />,
      deactivate: { deactivate },
    },
    {
      path: "/product",
      name: "View active profiles",
      icon: <FaShoppingBag />,
      deactivate: { deactivate },
    },
    {
      path: "/productList",
      name: "Reset Password",
      icon: <FaLaptopCode />,
      deactivate: { deactivate },
    },
  ];
  const errorMessage = "Sorry Your Account has been deactivated";
  console.log(menuItem[0].deactivate);
  return (
    <div className="container">
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Logo
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {
          /* menuItem.map((item, index)=>
                   
                   
                   ( 
                       <NavLink to={item.deactivate.deactivate  === "NO"? item.path : '/error'} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   )
                   

                   
                   
                   ) */
          menuItem.map((item, index) => (
            <div key={index}>
              {item.deactivate.deactivate === "NO" ? (
                <NavLink
                  to={item.path}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{item.icon}</div>
                  <div
                    style={{ display: isOpen ? "block" : "none" }}
                    className="link_text"
                  >
                    {item.name}
                  </div>
                </NavLink>
              ) : (
                <div className="link" onClick={() => alert(errorMessage)}>
                  <div className="icon">{item.icon}</div>
                  <div
                    style={{ display: isOpen ? "block" : "none" }}
                    className="link_text"
                  >
                    {item.name}
                  </div>
                </div>
              )}
            </div>
          ))
        }
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;

import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/MainScreen/Activation",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/about",
            name:"About",
            icon:<FaUserAlt/>
        },
        {
            path:"/analytics",
            name:"Analytics",
            icon:<FaRegChartBar/>
        },
        {
            path:"/comment",
            name:"Comment",
            icon:<FaCommentAlt/>
        },
        {
            path:"/product",
            name:"Product",
            icon:<FaShoppingBag/>
        },
        {
            path:"/productList",
            name:"Product List",
            icon:<FaThList/>
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;


// import React from 'react'
// import "./Sidebar.css"
// import { useNavigate } from 'react-router-dom'

// const Sidebar = () => {
//   const navigate = useNavigate();
//   return (
//     <div className='sidebar'>
//       <div className='sidebarWrapper'>
//         <ul className='sidebarList'>
//           <li className='listItem'>
//             <button className='listItemButton' onClick={()=>{
//               navigate('Activation')
//             }}>Activate Profile</button>
//           </li>
//           <li className='listItem'>
//             <button className='listItemButton'>Reset Password</button>
//           </li>
//           <li className='listItem'>
//             <button className='listItemButton'>New Posting</button>
//           </li>
//           <li className='listItem'>
//             <button className='listItemButton'>Update Posting</button>
//           </li>
//           <li className='listItem'>
//             <button className='listItemButton'>Search Candidates</button>
//           </li>
//           <li className='listItem'>
//             <button className='listItemButton'>View active Working profiles</button>
//           </li>
//           <li className='listItem'>
//             <button className='listItemButton'>View Earlier Postings</button>
//           </li>
//         </ul>

//       </div>
    
//     </div>
//   )
// }

// export default Sidebar
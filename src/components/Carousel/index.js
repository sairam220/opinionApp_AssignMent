import React, { useState } from 'react';
import {
    
    FaBars,
    FaUserSecret,
}from "react-icons/fa";
import {MdLocalOffer} from 'react-icons/md'
import {AiFillSchedule,AiOutlinePieChart} from 'react-icons/ai'
import { NavLink } from 'react-router-dom';
import {FcSettings} from 'react-icons/fc'
import './index.css'

const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(true);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<AiOutlinePieChart/>
        },
        {
            path:"/",
            name:"Transactions",
            icon:<MdLocalOffer/>
        },
        
        {
            path:"/",
            name:"Schedules",
            icon:<AiFillSchedule/>
        },
        {
            path:"/",
            name:"Users",
            icon:<FaUserSecret/>
        },
        {
            path:"/",
            name:"Settings",
            icon:<FcSettings/>
        }
    ]
    return (
        <div className="container">
                  <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Board.</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" >
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
               
           </div>
           <main>{children}</main>
           <p className='active'>About</p>
        </div>
    );
};

export default Sidebar;
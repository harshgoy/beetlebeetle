import React, { useState } from 'react'
import "./Navbar.scss";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
const Navbar = () => {
    const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
    const [isProductOpen, setIsProductOpen] = useState(false);


    const toggleIndustriesDropdown = () => {
        if(isProductOpen){
            setIsProductOpen(false);
        }
        setIsIndustriesOpen(!isIndustriesOpen);
    };

   
    const toggleProductDropdown = () => {
        if(isIndustriesOpen){
            setIsIndustriesOpen(false);
        }
        setIsProductOpen(!isProductOpen);
    };

    // const closeOpenMenus=()=>{
    //     setIsIndustriesOpen(false);
    //     setIsProductOpen(false);
    // }
    // document.addEventListener('mousedown',closeOpenMenus);
    
    return (
        <div className='navbar'>

            <div className="logo--container">
                <img className="logo" src="./logo.png" alt="logo" />
            </div>

            <div className="button--group">
                {/* <button className='navbutton'>Industries</button> */}
                <div className={`navbar-dropdown ${isIndustriesOpen ? 'open' : ''}`}>
                    <button className="dropdown-toggle" onClick={toggleIndustriesDropdown}>
                        Industries &nbsp; {isIndustriesOpen ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                    <div className="dropdown-menu">
                        <div>Industries &nbsp; <FaArrowRightLong /> </div>
                        <ul className="dropdown-column">
                            <li><img src="./privateequity.svg" alt="" /> <p>Private Equity</p></li>
                            <li><img src="./venturecap.svg" alt="" /> <p>Venture Capital</p></li>
                            <li><img src="./commrealestate.svg" alt="" /> <p>Commercial Real Estate</p></li>
                        </ul>
                        <ul className="dropdown-column">
                            <li><img src="./inbanking.svg" alt="" /> <p>Investment Banking/M&A Advisory</p></li>
                            <li><img src="./corporate.svg" alt="" /> <p>Corporate Devolopment / M&A</p></li>
                            <li><img src="./consulting.svg" alt="" /> <p>Consulting CRM</p></li>
                        </ul>
                    </div>
                </div>

                <div className={`navbar-dropdown ${isProductOpen ? 'open' : ''}`}>
                    <button className="dropdown-toggle" onClick={toggleProductDropdown}>
                        Product &nbsp; {isProductOpen ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                    <div className="dropdown-menu">

                        <ul className="dropdown-column">
                            <li><img src="./crm.svg" alt="" /> <div><p>CRM</p><p>Eliminate busywork and manage deals</p></div></li>
                            <li><img src="./reporting.svg" alt="" /> <div><p>Reporting</p><p>Drive Efficiency to Close More Deals</p></div></li>
                            <li><img src="./integration.svg" alt="" /> <div><p>Integrations</p><p>Use Relationship Intelligence Everywhere</p></div></li>
                            <li><img src="./salesforce.svg" alt="" /> <div><p>Salesforce</p><p>The Power of Relationship Intelligence Inside Salesforce</p></div></li>
                        </ul>
                        <ul className="dropdown-column">
                        <li><img src="./ri.svg" alt="" /> <div><p>Relationship Intelligence</p><p>Uncover new opportunities and find warm introductions</p></div></li>
                            <li><img src="./mob.svg" alt="" /> <div><p>Mobile</p><p>Manage Deals From Anywhere</p></div></li>
                            <li><img src="./dealflow.svg" alt="" /> <div><p>Deal Flow Software</p><p>Easily Manage Your Deals</p></div></li>
                        </ul>
                    </div>
                </div>
                <button className='navbutton'>Calculator</button>

            </div>

            <div className="login--demo--container">
                <button className='login--button'>Log In</button>
                <button className='request--button'>Request A Demo &nbsp; <FaArrowRight /></button>

            </div>

        </div>
    )
}

export default Navbar
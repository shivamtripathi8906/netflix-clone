import React from 'react';
import "../CSS/navbar.css";
import logo from "../Images/nav-logo1.png";
import avatar from "../Images/netflix-avatar.png";
import { useState, useEffect } from 'react';

function Navbar() {
    const [show, handleshow]= useState(false)
    useEffect(()=>{
        
        window.addEventListener("scroll",()=>{
            if(window.scrollY>200){
                handleshow(true)
            }
            else
                handleshow(false)
        })
        
        return()=>{
            window.removeEventListener("scroll");
        }
    },[])

    return (
        <div className={`navbarMainContainer ${show && " navblack"}`}>
            <img src={logo} alt="logo" className='logo1'/>
            <img src={avatar} alt="avatar" className='logo2'/>
        </div>
    )
}

export default Navbar

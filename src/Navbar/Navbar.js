import React from 'react'
import './NavbarApp.css'
import {BsMouse} from 'react-icons/bs'

export const Navbar = () => {
    return (
        <div>
            <div class="left-sidebar">
                <div className='navbar1'>
                    <div className="nav-heading">
                        <h2>Sophiee Clank</h2>
                        <h3><small>Front-end Developer</small></h3>
                    </div>
                    <ul className='nav-items'>
                        <li><a href="#introduction">INTRODUCTION</a></li>
                        <li><a href="#about">ABOUT</a></li>
                        <li><a href="#services">SERVICES</a></li>
                        <li><a href="#experience">EXPERIENCE</a></li>
                        <li><a href="#skills">SKILLS</a></li>
                        <li><a href="#contact">CONTACT</a></li>

                    </ul>
                    <BsMouse className='mouse'/>
                </div>
            </div>
        </div>
    )
}

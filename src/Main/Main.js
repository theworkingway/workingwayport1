import React from 'react'
import './MainApp.css'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'

export const Main = () => {
  return (
    <div>
      <div class="main-content">
        <div className="main-nav">
          <a href='#' className='cv'><h3>DOWNLOAD MY CV</h3></a>
          <button className='touch'><a href="#contact" className='touch-text'>GET IN TOUCH</a></button>
        </div>
        <div className="intro" id='introduction'>
          <div className="top">
            <h4 className='top-num'>1</h4>
            <h4 className='top-intro'>INTODUCTION</h4>
            <span className='top-line'></span>
          </div>
          <h2>Hello! I’am Sophie Clark,
            a business developer that solves business related problems!</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla modi magnam facere facilis asperiores, consequatur eveniet voluptatem quisquam laudantium officia.</p>
          <button className='touch'><a href="#about" className='touch-text'>More About Me</a></button>
        </div>

        {/* ----------------------------------------------ABOUT--------------------------------------------------------------- */}

        <div className="intro" id='about'>
          <div className="top">
            <h4 className='top-num'>2</h4>
            <h4 className='top-intro'>ABOUT</h4>
            <span className='top-line'></span>
          </div>
          <h2>ABOUT</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla modi magnam facere facilis asperiores, consequatur eveniet voluptatem quisquam laudantium officia.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla modi magnam facere facilis asperiores, consequatur eveniet voluptatem quisquam laudantium officia.</p>
        </div>

        {/* ----------------------------------------------SERVICES--------------------------------------------------------------- */}

        <div className="intro" id='services'>
          <div className="top">
            <h4 className='top-num'>3</h4>
            <h4 className='top-intro'>SERVICES</h4>
            <span className='top-line'></span>
          </div>
          <h2>I offer a wide range of amazing services for your business.</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla modi magnam facere facilis asperiores, consequatur eveniet voluptatem quisquam laudantium officia.</p>
          <button className='service-btn'>01. Business Research <span className='service-plus'>+</span></button>
          <button className='service-btn'>02. Business Growth <span className='service-plus'>+</span></button>
          <button className='service-btn'>03. Business Development <span className='service-plus'>+</span></button>
        </div>

        {/* ----------------------------------------------Experience--------------------------------------------------------------- */}

        <div className="intro" id='experience'>
          <div className="top">
            <h4 className='top-num'>4</h4>
            <h4 className='top-intro'>Experience</h4>
            <span className='top-line'></span>
          </div>
          <h2>In my work i draw on years of experience as a business developer.</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla modi magnam facere facilis asperiores, consequatur eveniet voluptatem quisquam laudantium officia.</p>


          <div className="exp-head">
            <h3>03. A very long Jobtitle</h3>
            <p><small>May 2022 - February 2023   Companyname</small></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla modi magnam facere facilis asperiores, consequatur eveniet voluptatem quisquam laudantium officia.</p>

            <h3>02. A very long Jobtitle</h3>
            <p><small>May 2021 - February 2023   Companyname</small></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla modi magnam facere facilis asperiores, consequatur eveniet voluptatem quisquam laudantium officia.</p>

            <h3>01. A very long Jobtitle</h3>
            <p><small>May 2020 - February 2023   Companyname</small></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla modi magnam facere facilis asperiores, consequatur eveniet voluptatem quisquam laudantium officia.</p>
          </div>
        </div>

        {/* ----------------------------------------------Skills--------------------------------------------------------------- */}

        <div className="intro" id='skills'>
          <div className="top">
            <h4 className='top-num'>5</h4>
            <h4 className='top-intro'>SKILLS</h4>
            <span className='top-line'></span>
          </div>
          <h2>My Skills</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla modi magnam facere facilis asperiores, consequatur eveniet voluptatem quisquam laudantium officia.</p>

          <div className="skills">
            <h3>Skillset</h3>
            <button className='skills-btn'>SEO <br /><span className='skills-text'>Excellent</span></button>
            <button className='skills-btn'>MARKETING <br /><span className='skills-text'>Professional</span></button>
            <button className='skills-btn'>BUSINESS RELATIONS<br /><span className='skills-text'>Experienced</span></button>
            <button className='skills-btn'>FINANCIAL<br /><span className='skills-text'>EXPERT</span></button>

            <h3>Toolset</h3>
            <button className='skills-btn'>MICROSOFT EXCEL<br /><span className='skills-text'>Excellent</span></button>
            <button className='skills-btn'>MICROSOFT WORD<br /><span className='skills-text'>Professional</span></button>

            <h3>Language</h3>
            <button className='skills-btn'>ENGLISH <br /><span className='skills-text'>Native</span></button>
            <button className='skills-btn'>SPANISH <br /><span className='skills-text'>Fluent</span></button>
          </div>


        </div>

        {/* ----------------------------------------------Contact--------------------------------------------------------------- */}

        <div className="intro" id='contact'>
          <div className="top">
            <h4 className='top-num'>6</h4>
            <h4 className='top-intro'>Contact</h4>
            <span className='top-line'></span>
          </div>
          
          <div className="contact-back">
            <p>Want to create something awesome ? Drop me <br/>an email.</p>
            <h1>HELLO@EMAIL.COM</h1>

            <div className="contact-social">
              <AiFillFacebook className='contact-icons'/>
              <BsInstagram className='contact-icons'/>
              <AiFillLinkedin className='contact-icons'/>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

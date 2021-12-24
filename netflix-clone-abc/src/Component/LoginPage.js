import React from 'react';
import "../CSS/loginpage.css";
import N1 from "../Images/nav-logo1.png";
import B1 from "../Images/net-home.jpg";
import { BsChevronRight } from "react-icons/bs";
import ReactPlayer from 'react-player';
import V1 from "../Images/video-devices-in.m4v";
import T1 from "../Images/device-pile.png";
import C1 from "../Images/child-photo.png";
import {useState} from "react";
import { MdAdd, MdOutlineCancel } from "react-icons/md";


function LoginPage() {
    const [style, setStyle] = useState(false)
    const [id, setId] = useState("")

    const handleClick=(p)=>{
        if(style===true && p===id){
            setStyle(false);
            setId("")
        }
        else{
        setStyle(true)
        setId(p)
        }
    }

    return (
        <div className='loginpage_main_container'>
            <div className="banner-container" 
                 style={{ backgroundImage:`url(${B1})`,  backgroundSize:"cover",
                 backgroundPosition:"center top",
                 backgroundRepeat:"no-repeat"}}>
                      <div className="loginNav">
                          <img src={N1} alt="" />
                          <button className='sign-in'>Sign In</button>
                      </div>
                      <div className="emaillogin">
                          <h1>Unlimited movies, TV<br/> shows and more.</h1>
                          <h4>Watch anywhere. Cancel anytime.</h4>
                          <p>Ready to watch? Enter your email to create or restart your membership.</p>
                          <div className="inputcontainer">
                                  <input type="email" placeholder='Email address' className='email-input'/>
                                  <button className='get-started'>Get Started &nbsp; <BsChevronRight/></button>
                          </div>
                      </div>
                      <div className="space-bottom-container"></div>
                      <div className="grey-container"></div>

            </div>
            <div className="watcheverywherwhere-container-main">
            <div className="watch-everywhwere-container">
                <div className="watch-everywhere-box1">
                     <h1>Watch everywhere.</h1>
                     <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                </div>
                <div className="watch-everywhere-box2">
                    <div className="tv-container"><img src={T1} alt="tv" />
                     <ReactPlayer url={V1} playing={true}  loop={true} className="video-sacred-games" style={{width:"100%",}}/>
                     </div>
                </div>
            </div>  
            <div className="grey-container"></div>
            </div>
            <div className="childrenmain-container">
                <div className="children-container">
                    <div className="childern-container-box1">
                        <div className="childphoto-container">
                            <img src={C1} alt="" />
                        </div>
                    </div>
                    <div className="childrencontainerbox2">
                        <h1>Create profiles for children.</h1>
                        <p>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
                    </div>
                </div>
                <div className="grey-container"></div>
            </div>
            <div className="question-container-main-parent">
            <div className="question-containers-main">
                
                <h1>Frequently Asked Questions</h1>
                <button id='b1'className='questionbutton' onClick={(p)=>{handleClick("b1")}}>What is Netflix? {(id==="b1")?(<MdOutlineCancel size="1.65rem"/>):(<MdAdd size="1.65rem"/>)}</button>
                {(style) && (id==="b1")?(<div className="button-content"><p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.</p>
                  <p>You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p>
                  </div>):null}
                <button id='b2' className='questionbutton' onClick={(p)=>{handleClick("b2")}}>How much does Netflix cost? {(id==="b2")?(<MdOutlineCancel size="1.65rem"/>):(<MdAdd size="1.65rem"/>)}</button>
                {(style) && (id==="b2")? (<div className="button-content">Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.</div>):null}
                <button id='b3' className='questionbutton' onClick={(p)=>{handleClick("b3")}}>How do I cancel? {(id==="b3")?(<MdOutlineCancel size="1.65rem"/>):(<MdAdd size="1.65rem"/>)}</button>
                {(style) && (id==="b3")? (<div className="button-content">Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</div>):null}
                <button id='b4' className='questionbutton' onClick={(p)=>{handleClick("b4")}}>What can I watch on Netflix? {(id==="b4")?(<MdOutlineCancel size="1.65rem"/>):(<MdAdd size="1.65rem"/>)}</button>
                {(style) && (id==="b4")? (<div className="button-content">Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</div>):null}
                <button id='b5' className='questionbutton' onClick={(p)=>{handleClick("b5")}}>Is Netflix good for kids? {(id==="b5")?(<MdOutlineCancel size="1.65rem"/>):(<MdAdd size="1.65rem"/>)}</button>
                {(style) && (id==="b5")? (<div className="button-content"><p>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.</p><p>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</p></div>):null}
            </div>
            <div className="grey-container"></div>
            </div>
            <div className="login-page-footer">
                <p>Questions? Call 000-800-040-1843</p>
                <div className="multiple-link-container-main">
                    <div className="multiple-link-container">
                        <p>FAQ</p>
                        <p>Investor Relations</p>
                        <p>Privacy</p>
                        <p>Speed Test</p>
                    </div>
                    <div className="multiple-link-container">
                        <p>Help Center</p>
                        <p>Jobs</p>
                        <p>Cookie Preference</p>
                        <p>Legal Notice</p>
                    </div>
                    <div className="multiple-link-container">
                        <p>Account</p>
                        <p>Ways to watch</p>
                        <p>Corporate Information</p>
                        <p>Only on Netflix</p>
                    </div>
                    <div className="multiple-link-container">
                        <p>Media Center</p>
                        <p>Terms of Use</p>
                        <p>Contact Us</p>
                    </div>
                </div>
                <p>Netflix India &copy;</p>
            </div>
        </div>
    )
}

export default LoginPage

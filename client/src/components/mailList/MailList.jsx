import React from 'react'
import "./mailList.css"



const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Save time, Save money!</h1>
      <div className="mailDesc">Sign up and we'll send the best deals to you</div>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your mail" />
        <button id="subscribe-btn">Subscribe</button>
      </div>
    </div>
  )
}

export default MailList

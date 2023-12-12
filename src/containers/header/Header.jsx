import React from "react";
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import "./header.css";

const Header = () => {
  return (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">
        Let's Build Something amazing with GPT-3 OpenAI
      </h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam sollicitudin tempor id eu nisl nunc mi. Non blandit massa enim nec.</p>
      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address"/>
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} alt="people"/>
        <p>1,600 people requested access to visit in the last 24 hours</p>
      </div> 
    </div>
    
    <div className="gpt3__header-image">
        <img src={ai} alt="ai"/>
    </div>
  </div>
  );
};

export default Header;

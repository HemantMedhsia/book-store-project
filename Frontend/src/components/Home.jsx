import React from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "../css/Home.css";
import "../css/Details.css";
import StyleCard from "./StyleCard.jsx";
import Ef from "./Ef.jsx";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".hero-image", {
      x: 200,
      duration: 1,
      scale: 0.3,
      opacity: 0
    });
    tl.from(".hero-text", {
      x: -200,
      duration: 1,
      scale: 0.3,
      opacity: 0
    });
    tl.from(".hero-description", {
      x: -200,
      duration: 1,
      opacity: 0
    });

    gsap.from(".leftdiv", {
      x: -300,
      duration: 1,
      rotate: -180,
      opacity: 0,
      scrollTrigger: {
        trigger: ".leftdiv",
        scrub: true,
        start: "top center", // start the animation when the top of the trigger element hits the center of the viewport
        end: "bottom top"   // end the animation when the bottom of the trigger element hits the top of the viewport
      }
    });
  });

  return (
    <div>
    <marquee width="100%" scrollamount="14" direction="left" height="100px" className='mark'>
          Kindly Visit Manav Sangrahalaya before 6pm , Due to forest area.
        </marquee>
      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-text">Manav Sangrahalaya Reads</h1>
          <p className="hero-description">
            Browse the collection of our best top interesting books. You will
            definitely find what you are looking for.
          </p>
        </div>
        <div className="hero-image"></div>
      </div>

      <div className="mainclass">
        <div className="leftdiv"></div>
        <div className="rightdiv"></div>
      </div>

      <div className="mainclass2">
        <div className="leftdiv2"></div>
        <div className="rightdiv2"></div>
      </div>
      <StyleCard />
      <Ef />
    </div>
  );
};

export default Home;

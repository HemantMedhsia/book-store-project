import React, { useEffect } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const TestComponent = () => {
  useEffect(() => {
    gsap.from(".box", {
      x: -300,
      duration: 1,
      scrollTrigger: {
        trigger: ".box",
        start: "top center",
        end: "bottom top",
        scrub: true,
        markers: true, // Enable markers for debugging
        onEnter: () => console.log("Entered .box") // Debugging
      }
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div style={{ height: '200vh' }}>
      <div className="box" style={{ width: '100px', height: '100px', background: 'red', margin: '100px auto' }}></div>
    </div>
  );
};

export default TestComponent;

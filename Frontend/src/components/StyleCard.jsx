import React from "react";
import "../css/normal.css";

function StyleCard() {
  return (
    <div className="upperdiv">
      <div className="container">
        <div className="card">
          <div className="content">
            <div className="img">
              <img src="https://unsplash.it/200/200" alt="Luis Molina" />
            </div>
            <div className="cardContent">
              <h3>
                Luis Molina
                <br />
                <span>Web Developer</span>
              </h3>
            </div>
          </div>
          <ul className="sci">
            <li style={{ "--i": 1 }}>
              <a href="#">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
            </li>
            <li style={{ "--i": 2 }}>
              <a href="#">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </li>
            <li style={{ "--i": 3 }}>
              <a href="#">
                <i className="fa fa-github" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="card">
          <div className="content">
            <div className="img">
              <img src="https://unsplash.it/200/202" alt="Luis Molina" />
            </div>
            <div className="cardContent">
              <h3>
                Luis Molina
                <br />
                <span>Web Developer</span>
              </h3>
            </div>
          </div>
          <ul className="sci">
            <li style={{ "--i": 1 }}>
              <a href="#">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
            </li>
            <li style={{ "--i": 2 }}>
              <a href="#">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </li>
            <li style={{ "--i": 3 }}>
              <a href="#">
                <i className="fa fa-github" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="card">
          <div className="content">
            <div className="img">
              <img src="https://unsplash.it/200/203" alt="Luis Molina" />
            </div>
            <div className="cardContent">
              <h3>
                Luis Molina
                <br />
                <span>Web Developer</span>
              </h3>
            </div>
          </div>
          <ul className="sci">
            <li style={{ "--i": 1 }}>
              <a href="#">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
            </li>
            <li style={{ "--i": 2 }}>
              <a href="#">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </li>
            <li style={{ "--i": 3 }}>
              <a href="#">
                <i className="fa fa-github" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default StyleCard;

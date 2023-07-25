// ElusionOp.js
import React from 'react';
import styles from "../styles/styles.module.css";

const ElusionOp = () => {
  return (
    <>
   <nav className="navbar navbar-expand-xl navbar-light" style={{ backgroundColor: "#cb20ff" }}>
  <div className="container">
    <a className="navbar-brand" href="#">
      <img src="/newlogo (2) (1).png" width={200} className="img2" alt="Logo" />
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item li">
          <a className="nav-link Bozo scroll-link" href="#">
            Home
          </a>
        </li>
        <li className="nav-item li">
          <a className="nav-link Bozo Bozo-change scroll-link" href="#aboutus" >
            AboutUs
          </a>
        </li>
        <li className="nav-item li">
          <a className="nav-link Bozo scroll-link" href="#">
            Roadmap
          </a>
        </li>
        <li className="nav-item li">
          <a className="nav-link Bozo" href='#'>
            ElusionOP
          </a>
        </li>
        <li className="nav-item li">
          <a className="nav-link Bozo" href="#">
            Stake
          </a>
        </li>
        <li className="nav-item li">
          <a className="nav-link Bozo" href="#">
            Whitepaper
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link Bozo"
            href="https://pancakeswap.finance/swap?outputCurrency=0x7704d0EaD6F74E625d7371b079D8b2475bc852d4&inputCurrency=BNB"
            target={"_blank"}
          >
            <button className="btn btn-info">Buy on Pancakeswap</button>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
      
    </>
  );
};

export default ElusionOp;
import "@/styles/globals.css";

import React, { useState, useEffect } from "react";
import { Color } from "three";
import Nav from "./nav";
import SmoothScroll from "./smoothScroll";
import ElusionOp from "./ElusionOp.";
import { useRouter } from 'next/router';

import { Link as ScrollLink } from "react-scroll";

import 'animate.css';
import $ from 'jquery';
import { color } from "@chakra-ui/react";



function LoadingScreen() {
  return (
    <div className="loading-screen d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
    <img src="/ElusionLogo.png"/>
  </div>
  
  );
}




export default function App({ Component, pageProps }) {


  // const MyImage = () => {
  //   const [isHovered, setIsHovered] = useState(false);
  
  //   const handleHover = () => {
  //     setIsHovered(true);
  //   };
  
  //   const handleLeave = () => {
  //     setIsHovered(false);
  //   };
  // return(
  //   <>
  //   <div
  //     onMouseEnter={handleHover}
  //     onMouseLeave={handleLeave}
  //   >
  //     {isHovered ? (
  //       <img src="/real-1-gif.gif" alt="Animated GIF" />
  //     ) : (
  //       <img src="/real11.png" alt="Static Image" />
  //     )}
  //   </div>
  //   </>
  // )
  
  // }
  



  const [showElusionOp, setShowElusionOp] = useState(false);
  const handleElusionOpClick = () => {
    setShowElusionOp(true);
  };

  const fadeInOnScroll = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }, 200); // Adjust the delay time as needed
      }
    });
  };
  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay with a setTimeout function
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Replace 3000 with the desired loading time in milliseconds
  }, []);

  // Use the useEffect hook to create the Intersection Observer
  useEffect(() => {
    const images = document.querySelectorAll(".fade-in");
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.4, // Adjust this threshold based on your preference
    };

    const observer = new IntersectionObserver(fadeInOnScroll, observerOptions);
    images.forEach((img) => observer.observe(img));

    return () => observer.disconnect();
  });

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  // Function to handle click on a navigation item
  const handleNavItemClick = () => {
    setIsNavbarOpen(false);



    
  };


  const [navbarBackgroundColor, setNavbarBackgroundColor] = useState("#cb20ff"); // Initial background color

  // Rest of the code...

  const handleScroll = () => {
    const scrollY = window.scrollY;
    // Define the scroll threshold where the color change should start (in pixels)
    const scrollThreshold = 30;
  
    // Calculate the new background color based on the scroll position
    const newBackgroundColor = scrollY > scrollThreshold ? "purple" : "#cb20ff";
  
    // Update the navbar background color state
    setNavbarBackgroundColor(newBackgroundColor);
  
    // Update the class of the navbar based on the scroll position
    const navbar = document.querySelector(".navbar");
    
  };
  

  useEffect(() => {
    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  

  return (
    <>
    {isLoading ? (
      <LoadingScreen />
    ) : (
      <div>
        {
          <div className="whole-container" style={{ backgroundColor: "" }} id="home">
          <title>Elusion</title>
          <nav
className={`navbar navbar-expand-xl navbar-light  ${
isNavbarOpen ? "show" : ""
}`}
style={{ backgroundColor: navbarBackgroundColor }}
>

            <div className="container">
              <a className="navbar-brand" href="#" >
                <img src="/newlogo (2) (1).png" width={200} className="img2" alt="Logo" />
              </a>
              <button
className="navbar-toggler"
type="button"
aria-controls="navbarNav"
aria-expanded="false"
aria-label="Toggle navigation"
onClick={() => setIsNavbarOpen((prevState) => !prevState)}
>
<span className="navbar-toggler-icon white-toggler-icon"></span>
</button>
              <div className={`collapse navbar-collapse ${isNavbarOpen ? "show" : ""}`} id="navbarNav">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item li nav-item-0">
                    <ScrollLink
                      className="nav-link Bozo scroll-link animated-element"
                      activeClass="active"
                      to="home"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      onClick={handleNavItemClick}
                    >
                      <span style={{color:"white"}}>Home</span>
                    </ScrollLink>
                  </li>
                  <li className="nav-item li animated-element nav-item-1">
                    <ScrollLink
                      className="nav-link Bozo scroll-link"
                      activeClass="active"
                      to="aboutus"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      onClick={handleNavItemClick}
                    >
                      <span style={{color:"white"}}>About us</span>
                    </ScrollLink>
                  </li>
                  <li className="nav-item li animated-element nav-item-2">
                    <ScrollLink
                      className="nav-link Bozo scroll-link"
                      activeClass="active"
                      to="roadmap"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      onClick={handleNavItemClick}
                    >
                      <span style={{color:"white"}}>Roadmap</span>
                    </ScrollLink>
                  </li>
                  <li className="nav-item li animated-element nav-item-3">
                    <ScrollLink
                      className="nav-link Bozo scroll-link"
                      activeClass="active"
                      to="elusionop"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      onClick={handleNavItemClick}
                    >
                      <span style={{color:"white"}}>elusionOp</span>
                    </ScrollLink>
                  </li>
                  <li className="nav-item li nav-item-4">
                    <ScrollLink
                      className="nav-link Bozo scroll-link"
                      activeClass="active"
                      to="home"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      onClick={handleNavItemClick}
                    >
                      <span style={{color:"white"}}>Stake</span>
                    </ScrollLink>
                  </li>
                  <li className="nav-item li animated-element nav-item-5">
                    <ScrollLink
                      className="nav-link Bozo scroll-link"
                      activeClass="active"
                      to="home"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      onClick={() => {
                        if (window.innerWidth <= 1199) {
                          const navbarToggler = document.querySelector(".navbar-toggler");
                          if (navbarToggler.classList.contains("show")) {
                            navbarToggler.click();
                          }
                        }
                      }}
                    >
                      <span style={{color:"white"}}>Whitepaper</span>
                    </ScrollLink>
                  </li>
                  <li className="nav-item animated-element nav-item-6">
                    <a
                      className="nav-link Bozo"
                      href="https://pancakeswap.finance/swap?outputCurrency=0x7704d0EaD6F74E625d7371b079D8b2475bc852d4&inputCurrency=BNB"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="btn btn-info">Buy on Pancakeswap</button>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="container" >
          <div className="row row-of-elusion">
            <div className="col-md-12 col-lg-12 col-xl-6">
              <h1 className="Elusion-Header text-center fade-in">
                Welcome to the Blockchain of{" "}
                <span className="els">Elusion</span>
              </h1>
              <h4 className="Elusion-Text text-center fade-in">
                Unleashing the Power of AI: Envisioning a New Era with Elusion
                Where Artificial Intelligence Meets Crypto Brilliance!
              </h4>
            </div>
            <div className="mx-auto">
<div className="col-12 col-md-12 col-lg-12 col-xl-6 mdd">
<img className="fade-in fade-in" src="/newlogo.png" />
</div>
</div>
          </div>
        </div>


        <div id="elusionop" >
          <br/>
          <br/>

          <br/>
        <div className="container container-of-ElusionOp fade-in"  style={{ backgroundColor:"purple"}}>
        <div style={{paddingLeft:"3%"}}>
        <div className="row">
<div className="col-3 col-lg-3 col-md-3 text-center col-sm-3" style={{ paddingTop: "2%", color: "white" }}>
<h1 className="mx-auto elusion-op">ElusionOP</h1>
</div>
<div className="col-lg-5 col-5 offset-3 offset-lg-4 col-md-5 offset-md-4 col-sm-5 offset-sm-3 text-center">
<img className="mx-auto pets" src="/pets.png" width={"70%"} style={{ paddingTop: "1%" }} />
</div>
</div>

        </div>
        <div className="container container-of-play-to-earn" style={{ backgroundColor: "#cb20ff" }}>
<div className="row" style={{ paddingTop: "1%" }}>
<div className="col-xl-4 col-lg-12 mx-auto"> {/* Add mx-auto class here */}
  <h2 className="text-center  header-of-earn-1" style={{ color: "purple" }}>Play to earn</h2>
  <h5 className="text-center text-of-earn-1" style={{ color: "white" }}>Embark on an exhilarating journey with "Elusion," the ultimate play-to-earn game that combines thrills, challenges, and rewards like never before. In the fantastical realm of Elusion, you'll discover a world filled with untold riches and opportunities and opportunities</h5>
</div>
<div className="col-xl-4 col-lg-12 mx-auto"> {/* Add mx-auto class here */}
  <h2 className="text-center" style={{ color: "purple" }}>Characters</h2>
  <h5 style={{ color: "white" }} className="text-center text-of-earn-m text-of-earn-2">In "Elusion," a multitude of captivating characters awaits your discovery within the mystical realm. From seasoned warriors to enigmatic sorcerers, each character possesses unique abilities and backgrounds that add depth to the immersive gaming experience.</h5>
</div>
<div className="col-xl-4 col-lg-12 mx-auto"> {/* Add mx-auto class here */}
  <h2 className="text-center" style={{ color: "purple" }}>Rewards</h2>
  <h5 style={{ color: "white" }} className="text-center text-of-earn-3">Discover hidden caches of digital assets that hold immense value within the blockchain-based economy of Elusion. As you conquer formidable quests and rise through the ranks, you'll earn tokens that grant you access to exclusive features, rare cosmetic items, and coveted in-game.</h5>
</div>
</div>
</div>


         {/* <div className="container mx-auto" style={{padding:'0',paddingTop:"1.4%"}}>
<div className="row mx-auto">
<div className="col-xl-4" style={{backgroundColor:"#cb20ff",paddingRight:"1%",borderTopLeftRadius:"15px",borderBottomLeftRadius:"15px"}}>
  <img src="/character1.png" width={"60%"} className="d-block mx-auto" style={{ paddingLeft: "-3%" }} />
  <h2 className="text-center" style={{color:"white"}}>Reptile</h2>
</div>
<div className="col-xl-4" style={{backgroundColor:"#cb20ff"}}>
  <img src="/character2.png" width={"62.5%"} className="d-block mx-auto" />
  <h2 className="text-center" style={{color:"white"}}>Aquatic</h2>
</div>
<div className="col-xl-4" style={{backgroundColor:"#cb20ff",borderTopRightRadius:"15px",borderBottomRightRadius:"15px"}}>
  <img src="/character3.png" width={"58%"} className="d-block mx-auto" />
  <h2 className="text-center" style={{color:"white"}}>Beast</h2>
</div>
</div>
</div> */}


      </div>
        </div>

<br/>


        <div style={{ backgroundColor: "" }}>
          <div className="container container-of-exchanges">
            <div className="row text-center">
              <div className="text-center mx-auto">
                <h1
                  style={{
                    color: "white",
                    paddingTop: "20%",
                    paddingBottom: "20%",
                  }}
                  className="text-center fade-in"
                >
                  Exchanges & Partnerships
                </h1>
              </div>
            </div>
           
<div className="row mx-auto justify-content-center d-flex bbb">
      <div className="cmc">
        <img src="./cmc.png" className="fade-in"/>
      </div >
      
      <div className="cg">
        <img src="./cg.png" className="fade-in" />
      </div>
      
      <div className="pc">
        <img src="./pancakeSwap.png" width={"90%"} className="fade-in"/>
      </div>
      <div className="ct">
        <img src="./ct.png"  className="fade-in"/>
      </div>
      <div className="mexc">
        <img src="./mexc.png"className="fade-in" />
      </div>
     
      <div className="nuls">
        <img src="./nuls.png" className="fade-in"/>
      </div>

</div> 

          </div>
        </div>

        {/* part2 meet our team */}

        <div className="container container-of-tokenomics">
          <div className="">
            <h1
              className="text-center header-of-tekonomics fade-in"
              style={{ paddingTop: "15%", color: "whitesmoke" }}
            >
              Tokenomics
            </h1>
          </div>
            <div className="row d-flex mx-auto" style={{height:"30%"}}>
                  <div className="col-lg-3 about-tokenomic about-tokenomic-1 mx-auto fade-in">
                    <h4 className="text-center" style={{ color: "yellow" }}>Public Sale</h4>
                    <p className="text-center ">The allocation of 50% of tokens for a public sale implies that half of the total token supply is reserved for public investors. </p>
                  </div>
                  <div className="col-lg-3 about-tokenomic mx-auto fade-in">
                    <h4 className="text-center" style={{ color: "#ED5174" }}>Cex listings</h4>
                    <p className="text-center">The allocation of 50% of tokens for a public sale implies that half of the total token supply is reserved for public investors. </p>

                  </div>
                  <div className="col-lg-3 about-tokenomic mx-auto fade-in">
                    <h4 className="text-center" style={{ color: "#FD8963" }}>Burned</h4>
                    <p className="text-center">The allocation of 50% of tokens for a public sale implies that half of the total token supply is reserved for public investors. </p>

                  </div>
                  <div className="col-lg-3 about-tokenomic about-tokenomic-4 mx-auto fade-in">
                    <h4 className="text-center"  style={{ color: "#FA26CA" }}>Marketing</h4>
                    <p className="text-center">The allocation of 50% of tokens for a public sale implies that half of the total token supply is reserved for public investors. </p>

                  </div>
            </div>
          <div className="row mx-auto row-of-tekonomics ">
            <div className="col-lg-6 background-image tokenomics-1 mx-auto fade-in">
              <img src="./download.png" className="img-of-token" />
            </div>
            <div className="col-lg-6 tokenomics-2">
              <div style={{ height: "25%" }}>
                <ul className="d-flex justify-content-between ul-1 ul-2 fade-in">
                  <li className="">
                    <h4>
                      50%<sub style={{ color: "yellow" }}>Public Sale</sub>
                    </h4>
                    <p></p>
                  </li>
                  <li className="text-end">
                    <h4 className="text-end">50,000,000,000,000,000</h4>
                    <p className="text-end">Tokens</p>
                  </li>
                </ul>
                <ul className="d-flex justify-content-between ul-1 ul-3 fade-in">
                  <li>
                    <h4>
                      15%<sub style={{ color: "#ED5174" }}>Cex listings </sub>
                    </h4>
                    <p></p>
                  </li>
                  <li>
                    <h4>15,000,000,000,000,000</h4>
                    <p>Tokens</p>
                  </li>
                </ul>
                <ul className="d-flex justify-content-between ul-1 ul-4 fade-in">
                  <li>
                    <h4>
                      30%<sub style={{ color: "#FD8963" }}>Burned</sub>
                    </h4>
                    <p></p>
                  </li>
                  <li>
                    <h4>15,000,000,000,000,000</h4>
                    <p>Tokens</p>
                  </li>
                </ul>
                <ul
                  className="d-flex justify-content-between ul-5 ul-1 fade-in"
                  style={{ marginBottom: 0 }}
                >
                  <li>
                    <h4>
                      5%<sub style={{ color: "#FA26CA" }}>Marketing</sub>
                    </h4>
                    <p></p>
                  </li>
                  <li>
                    <h4>5,000,000,000,000,000</h4>
                    <p >Tokens</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <br />
        </div>

          <div className="container-fluid fluid-of-community fade-in" style={{backgroundColor:'purple'}}>
          <div className="container d-flex " >
            <div className="row row-of-community">
            <div className="col-lg-6 col-xl-5 row-community-1 fade-in">
              <h2 className="fade-in">Meet the worldwide community.</h2>
              <p className="fade-in">Join a fast-growing community of developers and innovators connected all over the world, building new era of the internet.</p>
            </div>
            <div className="col-lg-4 offset-lg-2 col-xl-4 offset-xl-3  offset-lg-2">
              <div>
                  <div className="d-flex">
                    <div>
                    </div>
                    <div >
                      <h3 style={{color:"#cb20ff"}} className="fade-in">Community Chat</h3>
                    </div>
                  </div>
                <div>
                  <p className="p-of-community fade-in">Ask general questions and chat with the worldwide community on Telegram.</p>
                </div>
              </div>
              <div className="fade-in">
                  <div className="d-flex">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 29 29"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M25.832 5.486c-1.167.572-2.31.804-3.5 1.155-1.308-1.475-3.247-1.557-5.11-.86-1.864.698-3.084 2.404-3.057 4.36v1.167c-3.786.097-7.157-1.627-9.333-4.667 0 0-4.88 8.672 4.666 12.834-2.184 1.455-4.362 2.436-7 2.333 3.86 2.104 8.066 2.827 11.707 1.77 4.176-1.213 7.609-4.343 8.926-9.032.393-1.426.588-2.9.58-4.379 0-.29 1.761-3.234 2.12-4.682v.001Z"></path></svg>                  </div>
                    <div>
                      <h3 style={{color:"#cb20ff"}}>Twitter</h3>
                    </div>
                  </div>
                <div >
                  <p className="fade-in">Follow <span style={{color:"#cb20ff"}}>@pulseaiapp</span> to get the last news and updates from across the ecosystem.</p>
                </div>
              </div>

            </div>
            </div>
          </div>
          </div>

        <div className="container2 " >
          <div className="container contr" id="aboutus">
            <div className="">
              <div>
                <h1 
                  className="text-center  meetteamtext fade-in"
                  style={{ color: "white" }}
                >
                  Meet our team
                </h1>
              </div>
            </div>
          
            <div className="row rowwww"style={{paddingTop:"5%"}}>
              <div
                className="col-sm-6 col-xl-3 col-lg-6  col-md-6 rowww1 fade-in"
                
              >
                <div
                  className="card mx-auto bg-dark card-1 cardi"
                  style={{ width: "16rem" }}
                >
                  <img
                    className="card-img-top"
                    src="1.png"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Sonic</h5>
                    <p className="card-text">Ceo</p>
           
                    
                  </div>
                </div>
              </div>

              <div className=" col-sm-6 col-xl-3 col-lg-6 col-md-6 rowww2 fade-in">
                <div
                  className="card mx-auto bg-dark card-2 cardi"
                  style={{ width: "16rem" }}
                >
                  <img
                    className="card-img-top"
                    src="2.png"
                    alt="Card image cap"
                    width={"100%"}
                  />
                  <div className="card-body">
                    <h5 className="card-title ">Nexus</h5>
                    <p className="card-text">Co-founder</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-xl-3 col-lg-6  col-md-6 rowww3 fade-in">
                <div
                  className="card mx-auto bg-dark card-3 cardi"
                  style={{ width: "16rem" }}
                >
                  <img
                    className="card-img-top"
                    src="3.png"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Ludwig</h5>
                    <p className="card-text">Web Developer</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-xl-3 col-lg-6  col-md-6 rowww4 fade-in">
                <div
                  className="card mx-auto bg-dark card-4 cardi"
                  style={{ width: "16rem" }}
                >
                  <img
                    className="card-img-top"
                    src="4.png"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Brooklyn</h5>
                    <p className="card-text">Marketing</p>
                  </div>
                </div>
              </div>
            </div>
            
          
          </div>
          <br />
          <br />
          <br />

        </div>
        <footer>
  <hr style={{ borderBottom: '3px solid purple' }} />
  <div className="container container-of-footer">
    <div className="row">
      <div className="col-md-12">
        <h1 style={{ color: 'white' }} className="header-of-footer fade-in">Let's make it happen.</h1>
        <h6 style={{color:"white "}} className="fade-in">Ready to try elusion!</h6>
      </div>
    </div>
    <div className="row">
      <div className="col-md-6 col-lg-4 ">
        <div className="form-group">
          <div className="input-container d-flex fade-in">
            <div>
              <input type="email" className="form-control" id="emailInput" placeholder=" " />
              <span className="placeholder">Email Address</span>
            </div>
            <div>
              <button className="button-of-footer fade-in">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="20" viewBox="0 0 24 24" fill="none">
                  <path stroke="purple" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M14.43 5.93L20.5 12l-6.07 6.07M3.5 12h16.83"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <div className="row d-flex">
        <div className="offset-sm-" style={{paddingRight:"2%",paddingLeft:"1%"}}>
          <img src="/twitter2.png" style={{cursor:'pointer'}} className="fade-in"/>
        </div>
        <div style={{paddingRight:"2%"}}>
          <img src="/telegram2.png" style={{cursor:'pointer'}} className="fade-in"/>
        </div>
        <div style={{paddingRight:"2%"}}>
          <img src="/instagram2.png" style={{cursor:'pointer'}} className="fade-in"/>
        </div>
        <div style={{paddingRight:"2%"}}>
          <img src="/facebook2.png" style={{cursor:'pointer'}} className="fade-in"/>
        </div>
    </div> */}
  </div>
</footer>

        </div>
     
        }
      </div>
    )}
  </>
  );
}

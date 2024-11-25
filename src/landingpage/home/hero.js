import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'

let images = [
  {
    name: "Img 1",
    link: "https://res.cloudinary.com/dzlmpyr5h/image/upload/v1732517466/j14olbzonpdr2yyvg36w.jpg",
  },
  {
    name: "Img 2",
    link: "https://res.cloudinary.com/dzlmpyr5h/image/upload/v1732518150/tw25owilpeyvyv91dvwi.jpg",
  },
];

let applyLink = "https://forms.gle/REmLfbe99V8NDrKT8";

function HeroSection() {
  let [index, setIndex] = useState(0);

  function handleImageChangeRight() {
    setIndex((i) => (i + 1) % images.length);
  }
  // function handleImageChangeLeft() {
  //   let i = index - 1 >= 0 ? index - 1 : images.length - 1;
  //   setIndex(i % images.length);
  // }
  useEffect(() => {
    const interval = setInterval(() => {
      handleImageChangeRight();
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [index]);
  return (
    <>
      <div
        className="row justify-content-center mt-3 hero-section"
        // style={{
        //   backgroundImage: `url(${images[index].link})`,
        //   transition: "background-image 1s ease-in-out",
        // }}
      >
         <ImageCarousel images={images} />
        {/* <div className="hero-button">
          <div className="d-flex justify-content-between">
            <button
              style={{
                height: "70px",
                width: "70px",
                backgroundColor: "transparent",
                border: "none",
              }}
              onClick={handleImageChangeLeft}
            >
              <i
                class="fa-solid fa-circle-chevron-left"
                style={{ fontSize: "2.3rem", color: "grey" }}
              ></i>
            </button>
          </div>
          <div className="col-8"></div>
          <div className="col-2 d-flex align-items-center justify-content-end">
            <button
              style={{
                height: "70px",
                width: "70px",
                backgroundColor: "transparent",
                border: "none",
              }}
              onClick={handleImageChangeRight}
            >
              <i
                class="fa-solid fa-circle-chevron-right"
                style={{ fontSize: "2.3rem", color: "grey" }}
              ></i>
            </button>
          </div>
        </div> */}
      </div>
      <div
        className="row justify-content-center mt-3"
        style={{ backgroundColor: "#500394"}}
      >
        <div className="col-md-8 hero-text text-center text-light p-4">
          <h1 className="pt-3 fs-1">
            <b>RESOLUTION ADMISSION TEST - 2025</b>
          </h1>
          <h2 className="fs-1 pb-4" style={{color:"#F5D37E"}}>
            <b>IX, X , XI & XII (SCIENCE)</b>
          </h2>
          <p>
            {" "}
            <b>
            DISCOVER YOUR POTENTIAL & GRAB A FREE SEAT
            </b>
          </p>
          <div>
          <button type="button" class="btn px-5 py-4 btn-danger m-5" style={{borderRadius:"30px"}}>
            <Link to={applyLink} target="_blank"><h3>APPLY NOW</h3></Link>
          </button>
          <button type="button" class="btn px-5 py-4 btn-danger m-5" style={{borderRadius:"30px"}}>
            <Link to="/admissions/test"><h3>LEARN MORE</h3></Link>
          </button>
          </div>

        </div>
      </div>
    </>
  );
}

export default HeroSection;


const ImageCarousel = ({ images, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, [images.length, interval]);

  return (
    <div style={{ position: "relative", overflow: "hidden", width: "100%", height: "100%" }}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image.link}
          alt={image.name}
          loading="lazy"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            opacity: index === currentIndex ? 1 : 0,
            transition: "opacity 1s ease-in-out", // Animation effect
          }}
        />
      ))}
    </div>
  );
};


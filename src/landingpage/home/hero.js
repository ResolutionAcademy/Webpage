import { useState, useEffect } from "react";

let images = [
  {
    name: "Img 1",
    link: "media/heroimg.png",
  },
  {
    name: "Img 2",
    link: "media/heroimg1.jpg",
  },
];

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
        style={{ backgroundColor: "#0368ED" }}
      >
        <div className="col-md-8 hero-text text-center text-light p-4">
          <p>
            <b>DISCOVER YOUR POTENTIAL & GRAB A FREE SEAT</b>
          </p>
          <p>
            {" "}
            <b>
              APPLY FOR RESOLUTION ADMISSION TEST(RAT) <br></br>
              FOR CLASS IX,X,XI & XII (SCIENCE)
            </b>
          </p>
          <button type="button" class="btn btn-danger m-3">
            APPLY NOW
          </button>
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


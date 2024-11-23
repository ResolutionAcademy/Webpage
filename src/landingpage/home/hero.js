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
  function handleImageChangeLeft() {
    let i = index - 1 >= 0 ? index - 1 : images.length - 1;
    setIndex(i % images.length);
  }
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
        style={{
          backgroundImage: `url(${images[index].link})`,
          transition: "background-image 1s ease-in-out",
        }}
      >
        <div className="col-2 d-flex align-items-center justify-content-start">
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
      </div>
      <div
        className="row justify-content-center mt-3"
        style={{ backgroundColor: "#0368ED" }}
      >
        <div className="col-8 text-center text-light p-4">
          <h2>DISCOVER YOUR POTENTIAL & GRAB A FREE SEAT</h2>
          <h2>
            {" "}
            APPLY FOR RESOLUTION ADMISSION TEST(RAT) <br></br>
            FOR CLASS IX,X,XI & XII (SCIENCE)
          </h2>
          <button type="button" class="btn btn-danger m-3">APPLY NOW</button>
        </div>
      </div>
    </>
  );
}

export default HeroSection;

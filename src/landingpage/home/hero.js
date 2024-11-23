import { useState } from "react";

let images = [
  {
    name: "Img 1",
    link: "media/heroimg.png",
  },
  {
    name: "Img 2",
    link: "media/heroimg1.png",
  },
];

function HeroSection() {
  let [index, setIndex] = useState(0);

  return (
    <div
      className="row justify-content-center mt-3"
      style={{
        height: "700px",
        backgroundImage: `url(${images[index].link})`, // Corrected `url` format
        backgroundSize: "cover", // Ensures the image covers the entire area
        backgroundPosition: "center", // Centers the image
        backgroundRepeat: "no-repeat", // Prevents repeating
      }}
    ></div>
  );
}

export default HeroSection;

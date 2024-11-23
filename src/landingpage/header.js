import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="container">
        <Head/>
        <div className="row justify-content-center" style={{ height: "150px" }}>
          <div className="col-md-12 col-lg-11 col-xxl-9 text-center d-flex flex-row align-items-center justify-content-center">
            <div className="me-3">
              <img
                src="media/logo.jpg"
                alt="Logo"
                style={{
                  display: "inline",
                  height: "120px",
                  width: "120px",
                  objectFit: "contain",
                }}
              />
            </div>
            <div>
              <h2 style={{ color: "#0952EF" }}>
                RESOLUTION ACADEMY SENIOR SECONDARY SCHOOL
              </h2>
              <p>
                <b>INSTITUTION CODE: 08H1999/071759</b>
              </p>
            </div>
          </div>
        </div>
        <div
          className="row"
          style={{ backgroundColor: "#0368ED", height: "5px" }}
        ></div>
        <div className="row" style={{ height: "40px" }}>
          <div className="col text-muted fs-4 text-center p-1">
            <b> LEARN TO LEAD </b>
          </div>
        </div>
        <div
          className="row justify-content-center"
          style={{ backgroundColor: "#0368ED", height: "50px" }}
        >
          <div className="col-10 d-flex flex-column align-items-center justify-content-center">
            <div>
              <Link to="/" className="h-links">
                HOME
              </Link>
              <Link to="/about" className="h-links">
                ABOUT US
              </Link>
              <Link to="/contact" className="h-links">
                CONTACT
              </Link>
              <Link to="/cocurricular" className="h-links">
                CO-CURRICULAR
              </Link>
              <Link to="/admissions" className="h-links">
                ADMISSIONS
              </Link>

              <Link to="/academics" className="h-links">
                ACADEMICS
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Head(){
  
  const message = "WELCOME TO RESOLUTION ACADEMY SENIOR SECONDARY SCHOOL"
  let [welcome,setWelcome] = useState("W");
  let [index,setIndex] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setWelcome((prev) => {
        if (index >= message.length) {
          setIndex(1); // Reset the index
          return "W"; // Clear the welcome message
        } else {
          setIndex((prevIndex) => prevIndex + 1/2); // Increment index
          return message.slice(0, index); // Append next character  
        }
      });
    }, 300);
    
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [index, message]);
  return(
    <div
    className="row justify-content-center"
    style={{ backgroundColor: "#0368ED", height: "50px" }}
  >
    <div className="col-6 d-flex text-start flex-column justify-content-center" style={{ color: "white" }}>
      <h5>{welcome}</h5>
    </div>
    <div className="col-5 d-flex flex-column align-items-center justify-content-center">
      <div className="row">
        <div className="col-2" style={{color:"white",marginRight:"20px"}}>
          <i class="fa-brands fa-facebook"></i>
        </div>
        <div className="col-2" style={{color:"white",marginRight:"20px"}}>
          <i class="fa-brands fa-instagram"></i>
        </div>
        <div className="col-2" style={{color:"white",marginRight:"20px"}}>
          <i class="fa-brands fa-youtube"></i>
        </div>
        <div className="col-2" style={{color:"white",marginRight:"0px"}}>
          <i class="fa-brands fa-linkedin"></i>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Header;

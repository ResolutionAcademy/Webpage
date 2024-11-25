import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Head />
      <div className="container">
        <div className="row justify-content-center" style={{ height: "150px" }}>
          <div className="col-md-12 col-lg-11 col-xxl-9 text-center d-flex flex-row align-items-center justify-content-center">
            <div className="me-3">
              <img
                className="school-logo-header"
                src="https://res.cloudinary.com/ddtlcwj12/image/upload/v1732542097/logo_uzfghk.jpg"
                alt="Logo"
              />
            </div>
            <div>
              <h2 className="school-name-header" style={{ color: "#0952EF" }}>
                RESOLUTION ACADEMY SENIOR SECONDARY SCHOOL
              </h2>
              <p className="school-code">
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
          style={{ backgroundColor: "#0368ED" }}
        >
          <div className="col-12 col-lg-10 d-flex flex-column align-items-center justify-content-center">
            <div
              className="nav-bar"
              style={{ display: "flex", flexWrap: "wrap" }}
            >
              <Link to="/" className="h-links">
                HOME
              </Link>
              <Link to="/about" className="h-links">
                ABOUT US
              </Link>
              <Link to="/contact" className="h-links">
                CONTACT
              </Link>
              <Link to="/cocurricular" className="h-links no-underline">
                CO-CURRICULAR
              </Link>

              <div className="dropdown">
                <div className="h-links" style={{ textDecoration: "none" }}>
                  ADMISSIONS&nbsp;<i class="fa-solid fa-angle-down"></i>
                </div>
                <div className="dropdown-menu">
                  <Link to="/admissions/journey" className="dropdown-item">
                    Admission Journey
                  </Link>
                  <Link to="/admissions/fees" className="dropdown-item">
                    Fee Structure
                  </Link>
                  <Link to="/admissions/test" className="dropdown-item">
                    Resolution Aptitute test
                  </Link>
                  <Link to="/admissions/faq" className="dropdown-item">
                    Admission FAQ
                  </Link>
                </div>
              </div>

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

function Head() {
  const message = "WELCOME TO RESOLUTION ACADEMY SENIOR SECONDARY SCHOOL";
  let [welcome, setWelcome] = useState("W");
  let [index, setIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setWelcome((prev) => {
        if (index > message.length) {
          setIndex(1); // Reset the index
          return "W"; // Clear the welcome message
        } else {
          setIndex((prevIndex) => prevIndex + 1 / 2); // Increment index
          return message.slice(0, index); // Append next character
        }
      });
    }, 250);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [index, message]);
  return (
    <div
      className="welcome-header"
      style={{ backgroundColor: "#0368ED", width: "100%" }}
    >
      <div className="welcome-message " style={{ color: "white" }}>
        <h5>{welcome}</h5>
      </div>
      <div className="">
        <div className="header-icons">
          <div className="" style={{ color: "white", marginRight: "20px" }}>
            <Link
              to="https://www.facebook.com/profile.php?id=61560494695194"
              target="_blank"
            >
              <i class="fa-brands fa-facebook"></i>
            </Link>
          </div>
          <div className="" style={{ color: "white", marginRight: "20px" }}>
            <Link to="/" target="_blank">
              <i class="fa-brands fa-instagram"></i>
            </Link>
          </div>
          <div className="" style={{ color: "white", marginRight: "20px" }}>
            <Link to="/" target="_blank">
              <i class="fa-brands fa-youtube"></i>
            </Link>
          </div>
          <div className="" style={{ color: "white", marginRight: "20px" }}>
            <Link to="mailto:ragsss2017@gmail.com" target="_blank">
            <i class="fa-solid fa-square-envelope"></i>
            </Link>
          </div>
          <div className="" style={{ color: "white", marginRight: "0px" }}>
            <Link to="/" target="_blank">
              <i class="fa-brands fa-linkedin"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

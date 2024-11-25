import React from "react";
import {Link} from 'react-router-dom';
function AboutUs() {
  return (
    <div className="container my-3" style={{ backgroundColor: "#0368ED" }}>
      <div className="row justify-content-center align-items-center">
        <div className="col-3 line" style={{ border: "1px solid white" }}></div>
        <div className="col-sm-4 text-center p-4" style={{ color: "white" }}>
          <h2>ABOUT US</h2>
        </div>
        <div className="col-3 line" style={{ border: "1px solid white" }}></div>
      </div>
      <div className="row justify-content-center">
        <div
          className="col-10 col-lg-3 m-1 photo-container"
        >
          <img src="https://res.cloudinary.com/ddtlcwj12/image/upload/v1732542082/img1_j0alha.png" alt="Description 1" className="photo" />
          <div className="overlay">
             <ul>
               <li><h3>Empathy</h3></li>
               <br></br>
               <li><h3>Equity</h3></li>
               <br></br>
               <li><h3>Enterprise</h3></li>
               <br></br>
               <li><h3>Integrity</h3></li>
               <br></br>
               <li><h3>Nurturing Relationships</h3></li>
             </ul>
             <br></br>
             <p><Link to='/about'>Learn More</Link></p>
          </div>
        </div>
        <div
          className="col-10 col-lg-3 m-1 photo-container"
        >
          <img src="https://res.cloudinary.com/dzlmpyr5h/image/upload/v1732517466/j14olbzonpdr2yyvg36w.jpg" alt="Description 2" className="photo" />
          <div className="overlay">
            <h3>Our Vision</h3>
            <br></br>
            <p>
              Resolution Academy Senior Secondary School aspires to become a
              premier institution that is deeply rooted in Indian ethics. We aim
              to equip the future generation of learners with a repertoire of
              skills and a sensitized perspective to understand and appreciate
              diversity, enabling them to develop solutions to meet the
              challenges of a dynamic environment and society.
            </p>
            <br></br>
             <p><Link to='/about'>Learn More</Link></p>
          </div>
        </div>
        <div
          className="col-10 col-lg-3 m-1 photo-container"
        >
          <img src="https://res.cloudinary.com/ddtlcwj12/image/upload/v1732542071/img3_lxezpf.png" alt="Description 3" className="photo" />
          <div className="overlay">
            <h3>Our Mission</h3>
            <br></br>
            <p>
              Resolution Academy Senior Secondary School works at providing a
              broad based education to develop its learners to be:
             
                Balanced in Mind, Body and Heart
                 Minded Inquirers And Effective Communicators
                Able to acknowledge and accept diversity and appreciate differences
                Responsible for Human Rights, Sustainable Development
                Global Well Being thereby reflecting a true global citizen
         
            </p>
            <br></br>
             <p><Link to='/about'>Learn More</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

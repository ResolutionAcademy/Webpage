function Footer() {
  return (
    <div
      className="container"
      style={{ backgroundColor: "white", borderTop: "5px solid #0368ED" }}
    >
      <div className="row justify-content-center" style={{borderBottom:"2px bottom #8d8e8f"}}>
        <div
          className="col-3 p-3 my-3"
          style={{ borderRight: "2px solid #8d8e8f" }}
        >
          <h5>GET IN TOUCH WITH US</h5>
        
          <div className="map"></div>
          <p className="f-contacts" style={{lineHeight:"30px"}}>
            ADMISSIONS: +91 00000 00000
            <br />
            HR OFFICE: +91 00000 00000
            <br />
            INQUIRY: +91 00000 00000
            <br />
            EMAIL ID: resultion@gmail.com
            <br />
          </p>
          <br></br>
          <div className="row justify-content-start">
            <div className="col-2">
              <i class="fa-brands fa-facebook"></i>
            </div>
            <div className="col-2">
              <i class="fa-brands fa-instagram"></i>
            </div>
            <div className="col-2">
              <i class="fa-brands fa-youtube"></i>
            </div>
            <div className="col-2">
              <i class="fa-brands fa-linkedin"></i>
            </div>
          </div>
        </div>
        <div className="col-7 p-3 my-3">
          <div className="row">
            <div className="col-6 ms-3">
              <h5>ABOUT US</h5>
              <ul  style={{lineHeight:"30px"}}>
                <li>GUIDING PRINCIPLES</li>
                <li>GOVERNANCE</li>
                <li>HOUSE SYSTEM</li>
                <li>INFRASTRUCTURE</li>
                <li>MANDATES AND PROCEDURE</li>
              </ul>
            </div>
            <div className="col-5 ms-4">
              <h5>ADMISSIONS</h5>
              <ul  style={{lineHeight:"30px"}}>
                <li>ADMISSION JOURNEY</li>
                <li>FEE STRUCTURE</li>
                <li>OPEN DAYS</li>
                <li>RESOLUTION</li>
                <li>ADMISSION FAQ</li>
              </ul>
            </div>
            <p>&nbsp; <b>Our Location</b> : Gogamukh Kalyanpur, Dhemji, Assam 787035</p>
          </div>
        </div>
      </div>
      <div className="row text-center">
        <p>&#169; 2017 Resolution Academy Senior Secondary School | All Right Reserved . Powered By : One Vision Technologies</p>
      </div>
    </div>
  );
}

export default Footer;

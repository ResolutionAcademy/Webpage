import {Link} from 'react-router-dom';

function Footer() {
  return (
    <div
      className="container"
      style={{ backgroundColor: "white", borderTop: "5px solid #0368ED" }}
    >
      <div className="row justify-content-center justify-content-start-lg" style={{borderBottom:"2px bottom #8d8e8f"}}>
        <div
          className="col-md-3 p-3 my-3 footer-contact"
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
            <Link to='/'><i class="fa-brands fa-facebook"></i></Link>
            </div>
            <div className="col-2">
            <Link to='/'> <i class="fa-brands fa-instagram"></i></Link>
            </div>
            <div className="col-2">
            <Link to='/'><i class="fa-brands fa-youtube" style={{color:"red"}}></i></Link>
            </div>
            <div className="col-2">
            <Link to='/'><i class="fa-brands fa-linkedin" ></i></Link>
            </div>
          </div>
        </div>
        <div className="col-md-7 p-3 my-3">
          <div className="row justify-content-center justify-content-start-lg">
            <div className="col-6 ms-lg-3">
              <h5>ABOUT US</h5>
              <ul  style={{lineHeight:"30px"}}>
                <li>GUIDING PRINCIPLES</li>
                <li>GOVERNANCE</li>
                <li>HOUSE SYSTEM</li>
                <li>INFRASTRUCTURE</li>
                <li>MANDATES AND PROCEDURE</li>
              </ul>
            </div>
            <div className="col-5 ms-lg-4">
              <h5>ADMISSIONS</h5>
              <ul  style={{lineHeight:"30px"}}>
                <li>ADMISSION JOURNEY</li>
                <li>FEE STRUCTURE</li>
                <li>OPEN DAYS</li>
                <li>RESOLUTION</li>
                <li>ADMISSION FAQ</li>
              </ul>
            </div>

            <p className='pt-4 ms-md-5 footer-location'>&nbsp; <b>Our Location</b> : Gogamukh Kalyanpur, Dhemji, Assam 787035</p>
          </div>
        </div>
      </div>
      <div className="row text-center py-3">
        <p>&#169; 2017 Resolution Academy Senior Secondary School | All Right Reserved . Powered By : One Vision Technologies</p>
      </div>
    </div>
  );
}

export default Footer;

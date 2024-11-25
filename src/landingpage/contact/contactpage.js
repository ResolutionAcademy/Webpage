import { Link } from "react-router-dom";

let applyLink = "https://forms.gle/REmLfbe99V8NDrKT8";

function ContactPage() {
  document.title = "Contact";
  return (
    <div className="container my-5">
      <div className="row justify-content-center text-center">
        {/* Office Phone Number Section */}
        <div className="col-md-4 m-4" >
          <div className="card border rounded" style={{height:"270px"}}>
            <div className="icon-wrapper mx-auto">
              <i className="bi bi-telephone-fill"></i>
            </div>
            <div className="card-body">
              <h5 className="card-title fw-bold">Office Phone Number</h5>
              <p>Admissions: +91-70003803</p>
              <p>HR Office: +91-7000010083</p>
            </div>
          </div>
        </div>

        {/* Mail for Information Section */}
        <div className="col-md-4 m-4"  >
          <div className="card border rounded" style={{height:"270px"}}>
            <div className="icon-wrapper mx-auto">
              <i className="bi bi-envelope-fill"></i>
            </div>
            <div className="card-body">
              <h5 className="card-title fw-bold">Mail for Information</h5>
              <Link to="mailto:ragsss2017@gmail.com" target="_blank"><p>ragsss2017@gmail.com</p></Link>
            </div>
          </div>
        </div>

        {/* Apply Now Section */}
        <div className="col-md-4 m-4" >
          <div className="card border rounded" style={{height:"270px"}}>
            <div className="icon-wrapper mx-auto">
              <i className="bi bi-mortarboard-fill"></i>
            </div>
            <div className="card-body">
             <Link to={applyLink} target="_blank"><h5 className="card-title fw-bold">Apply Now</h5></Link>
              <p>RESOLUTION ADMISSION TEST - 2025
              IX, X , XI & XII (SCIENCE)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;

import {Link} from 'react-router-dom'

function Admission() {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-3 line" style={{ border: "1px solid black" }}></div>
        <div className="col-sm-4 text-center p-4" style={{ color: "#0368ED" }}>
          <h2 >ADMISSIONS</h2>
        </div>
        <div className="col-3 line" style={{ border: "1px solid black" }}></div>
      </div>
      <div className="row py-1" style={{ backgroundColor: "#0368ED" }}></div>
      <div
        className="row justify-content-center"
        style={{ backgroundColor: "#801034" }}
      >
        <div
          className="col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 p-3 text-center m-3"
          style={{ backgroundColor: "white" }}
        >
          <Link to="/" className='links-black'>
          <i class="fa-solid fa-address-card" style={{ fontSize: "9rem" }}></i>
          <br></br>
          <br></br>
          <b>REGISTRATION FORM</b>
          </Link>
        </div>
        <div
          className="col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 p-3 text-center m-3"
          style={{ backgroundColor: "white" }}
        >
          <Link to="/" className='links-black'>
          <i
            class="fa-solid fa-book-open-reader"
            style={{ fontSize: "9rem" }}
          ></i>
          <br></br>
          <br></br>
          <b>ADMISSION PROCESS</b>
          </Link>
        </div>
        <div
          className="col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 p-3 text-center m-3"
          style={{ backgroundColor: "white" }}
        >
          <Link to="/" className='links-black'>
          <i class="fa-solid fa-list" style={{ fontSize: "9rem" }}></i>
          <br />
          <br />
          <b>FEE STRUCTURE</b>
          </Link>
        </div>
        
      </div>
      <div className="row py-1" style={{ backgroundColor: "#0368ED" }}></div>
    </div>
  );
}

export default Admission;

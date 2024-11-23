function Admission() {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-3" style={{ border: "1px solid black" }}></div>
        <div className="col-4 text-center p-4" style={{ color: "#0368ED" }}>
          <h2>ADMISSIONS</h2>
        </div>
        <div className="col-3" style={{ border: "1px solid black" }}></div>
      </div>
      <div className="row py-1" style={{ backgroundColor: "#0368ED" }}></div>
      <div
        className="row justify-content-center"
        style={{ backgroundColor: "#801034" }}
      >
        <div
          className="col-2 p-3 text-center m-3 rounded-md"
          style={{ backgroundColor: "white" }}
        >
          <i class="fa-solid fa-address-card" style={{ fontSize: "9rem" }}></i>
          <br></br>
          <br></br>
          <b>REGISTRATION FORM</b>
        </div>
        <div
          className="col-2 p-3 text-center m-3 rounded-md"
          style={{ backgroundColor: "white" }}
        >
          <i
            class="fa-solid fa-book-open-reader"
            style={{ fontSize: "9rem" }}
          ></i>
          <br></br>
          <br></br>
          <b>ADMISSION PROCESS</b>
        </div>
        <div
          className="col-2 p-3 text-center m-3 rounded-md"
          style={{ backgroundColor: "white" }}
        >
          <i class="fa-solid fa-list" style={{ fontSize: "9rem" }}></i>
          <br />
          <br />
          <b>FEE STRUCTURE</b>
        </div>
      </div>
      <div className="row py-1" style={{ backgroundColor: "#0368ED" }}></div>
    </div>
  );
}

export default Admission;

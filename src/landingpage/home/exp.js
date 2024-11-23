function LearningExperience() {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-3 line" style={{ border: "1px solid black" }}></div>
        <div className="col-sm-4 text-center p-4" style={{ color: "#HHH" }}>
          <h2>LEARNING EXPERIENCE</h2>
        </div>
        <div className="col-3 line" style={{ border: "1px solid black" }}></div>
      </div>

      <div className="row justify-content-center">
        <div
          className="col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 p-3 text-center m-3"
          style={{ backgroundColor: "#801034", color: "white" }}
        >
          <i
            class="fa-solid fa-graduation-cap"
            style={{ fontSize: "9rem" }}
          ></i>
          <br></br>
          <br></br>
          <b>ACADEMIC DEVELOPMENT</b>
        </div>
        <div
          className="col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2  p-3 text-center m-3"
          style={{ backgroundColor: "#801034", color: "white" }}
        >
          <i
            class="fa-solid fa-dumbbell"
            style={{ fontSize: "9rem" }}
          ></i>
          <br></br>
          <br></br>
          <b>PHYSICAL DEVELOPMENT</b>
        </div>
        <div
          className="col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2  p-3 text-center m-3"
          style={{ backgroundColor: "#801034", color: "white" }}
        >
          <i class="fa-solid fa-brain" style={{ fontSize: "9rem" }}></i>
          <br />
          <br />
          <b>EMOTIONAL DEVELOPMENT</b>
        </div>
        <div
          className="col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 p-3 text-center m-3"
          style={{ backgroundColor: "#801034", color: "white" }}
        >
          <i class="fa-solid fa-user-group" style={{ fontSize: "9rem" }}></i>
          <br />
          <br />
          <b>SOCIAL DEVELOPMENT</b>
        </div>
      </div>
    </div>
  );
}

export default LearningExperience;

function AboutUs() {
  return (
    <div className="container m-3" style={{ backgroundColor: "#0368ED" }}>
      <div className="row justify-content-center align-items-center">
        <div className="col-3 line" style={{ border: "1px solid white" }}></div>
        <div className="col-sm-4 text-center p-4" style={{ color: "white" }}>
          <h2>ABOUT US</h2>
        </div>
        <div className="col-3 line" style={{ border: "1px solid white" }}></div>
      </div>
      <div className="row justify-content-center">
        <div className="col-8 col-lg-4 m-1" style={{height:"600px",backgroundColor:"white"}}></div>
        <div className="col-8 col-lg-3 m-1" style={{height:"600px"}}>
          <div className="row mb-1" style={{height:"49%",backgroundColor:"white"}}></div>
          <div className="row" style={{height:"50%",backgroundColor:"white"}}></div>
        </div>
        <div className="col-8 col-lg-3 m-1" style={{height:"600px"}}>
          <div className="row mb-1" style={{height:"49%",backgroundColor:"white"}}></div>
          <div className="row" style={{height:"50%",backgroundColor:"white"}}></div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

import { useState } from "react";

function AcademicsPage() {
  document.title = "Academic Page";

  // Define state for the selected table
  const [selectedTable, setSelectedTable] = useState("option1"); // Default selected table option

  // Function to handle table selection
  const handleTableSwitch = (option) => {
    setSelectedTable(option);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-8">
          <h3 className="my-3" style={{ color: "#1B40B1" }}>
            Academic Development
          </h3>
          <p>
            <b>
              Resolution Academy Senior Secondary School - Learning Experience -
              Academic Development
            </b>
          </p>
          <br></br>
          <p style={{ textAlign: "justify" }}>
            Resolution Academy Senior Secondary School embodies a space for
            young and curious learners where they can explore, interact, enquire
            and learn. The idea is to create an environment where these curious
            minds can channel their energies and strengths so as to be able to
            build a milieu that supports and inculcates a spirit of generosity
            and service for the world at large. As a part of the academic
            paradigm at Resolution Academic Senior Secondary School, learners go
            through an all around program that organically involves Performing
            Arts, Fine Arts, Sports, Skill Development, and Career Orientation.
            RASSS prepares the students for the Higher Secondary and Senior
            Secondary qualifications as offered by the SEBA and AHSEC
          </p>
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-10 col-lg-8">
          <div className="table-head rounded-top">
            <button
              className={`rounded table-option1 ${
                selectedTable === "option1" ? "selected-table-option" : ""
              }`}
              onClick={() => handleTableSwitch("option1")}
            >
              <b>Literacy and Numeracy Skills</b>
            </button>
            <button
              className={`rounded table-option1 ${
                selectedTable === "option2" ? "selected-table-option" : ""
              }`}
              onClick={() => handleTableSwitch("option2")}
            >
              <b>Digital Competence</b>
            </button>
            <button
              className={`rounded table-option1 ${
                selectedTable === "option3" ? "selected-table-option" : ""
              }`}
              onClick={() => handleTableSwitch("option3")}
            >
              <b>Performing Arts and Fine Arts</b>
            </button>
            <button
              className={`rounded table-option1 ${
                selectedTable === "option4" ? "selected-table-option" : ""
              }`}
              onClick={() => handleTableSwitch("option4")}
            >
              <b>Career Educational and Vocational Skills</b>
            </button>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-8">
            {selectedTable === 'option1' && <Option1/>}
            {selectedTable === 'option2' && <Option2/>}
            {selectedTable === 'option3' && <Option3/>}
            {selectedTable === 'option4' && <Option4/>}
        </div>
      </div>
    </div>
  );
}

export default AcademicsPage;


function Option1(){
    return(
        <>
          Option1
        </>        
    )
}

function Option2(){
    return(
        <>
          Option2
        </>        
    )
}
function Option3(){
    return(
        <>
          Option3
        </>        
    )
}
function Option4(){
    return(
        <>
          Option4
        </>        
    )
}
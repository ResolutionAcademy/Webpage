import React, { useState } from "react";

function FeeStructurePage() {
  // Define state for the selected table
  const [selectedTable, setSelectedTable] = useState("option1"); // Default selected table option

  // Function to handle table selection
  const handleTableSwitch = (option) => {
    setSelectedTable(option);
  };

  return (
    <div className="fee-structure">
      <h3 style={{color:"#0629D7"}}>FEE STRUCTURE</h3>
      <p><b>Resolution Academy Senior Secondary School - Admissions - Fee Structure</b></p>
      <br></br>
      <br></br>
      {/* Table selection buttons */}
      <div className="table-head rounded-top">
        <button
          className={`rounded table-option ${
            selectedTable === "option1" ? "selected-table-option" : ""
          }`}
          onClick={() => handleTableSwitch("option1")}
        >
          <b>DAY BOARDING FEE STRUCTURE</b>
        </button>
        <button
          className={`rounded table-option ${
            selectedTable === "option2" ? "selected-table-option" : ""
          }`}
          onClick={() => handleTableSwitch("option2")}
        >
          <b>HOSTEL FEE STRUCTURE</b>
        </button>
      </div>

      {/* Render the table based on selectedTable */}
      <div>
        <div className="table-container">
          {selectedTable === "option1" && (
            <table className="fee-table">
              <thead>
                <tr>
                  <th rowSpan="2" className="header-cell">
                    ANNUAL FEE STRUCTURE
                  </th>
                  <th className="header-cell">NUR - GRADE II</th>
                  <th className="header-cell">GRADES III - VIII</th>
                  <th className="header-cell">GRADES IX - X</th>
                  <th className="header-cell">GRADE XI - XII</th>
                </tr>
              </thead>
              <tbody>
                {/* Section A */}
                <tr className="section-header">
                  <td colSpan="5">A. AT THE TIME OF ADMISSION</td>
                </tr>
                <tr>
                  <td>1. Registration Fees and Prospectus</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>2. Admission Fees (Non-Refundable)</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>3. Security Deposit (Refundable)</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                {/* Section B */}
                <tr className="section-header">
                  <td colSpan="5">
                    B. Annual Fees (at the time of admission and Annually at the
                    beginning of new academic session)
                  </td>
                </tr>
                <tr>
                  <td colSpan="1"></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                {/* Section C */}
                <tr className="section-header">
                  <td colSpan="5">C. REGULAR FEES (MONTHLY)</td>
                </tr>
                <tr>
                  <td>1. Tuition Fees</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>2. Dining Fees</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          )}

          {selectedTable === "option2" && (
            <table className="fee-table">
              <thead>
                <tr>
                  <th rowSpan="2" className="header-cell">
                    HOSTEL FEE STRUCTURE
                  </th>
                  <th className="header-cell">NUR - GRADE II</th>
                  <th className="header-cell">GRADES III - VIII</th>
                  <th className="header-cell">GRADES IX - X</th>
                  <th className="header-cell">GRADE XI - XII</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Hostel Fee Row 1</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Hostel Fee Row 2</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <h4>Please Note:</h4>
      <br></br>
      <ol className="fee-notes">
        <li><b>1.</b> Books, Uniforms and Stationary are not included in the above.</li>
        <li><b>2.</b> 10 % Sibling Concession (for the second child) and 5 % Sibling Concession (for the third child) are offered on the tuition fee, for the younger sibling, as long as both children are students in the School.</li>
        <li><b>3.</b> 10% Concession is offered on the Admission Fee for either of the parents working as defense personnel.</li>
        <li><b>4.</b> Scholars in Residence (Grade IV -XII) will need to deposit Rs. 15,000 as imprest, towards personal experiences.</li>
        <li><b>5.</b> The Half Yearly Fee is to be paid in 2 installments - first by 10th March,2025 and second by 10th September 2025.</li>
      </ol>
    </div>
  );
}

export default FeeStructurePage;

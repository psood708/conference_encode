import "../assets/css/registrationfee.css"

const Registraionfee = () => {
  return (
    <>
      <div className="regFee">
        <div className="regHead">
          <h2>Registration</h2>
        </div>
        <div className="regNotes">
          <p>The last Date to Register online is 5<sup>th</sup> March, 2023</p>
        </div>
        <div className="regData">
          <div className="regDataField">
            <h4 className="dataFieldHeader">
              Early Bird Registration Fees (valid till 31<sup>st</sup> January, 2023)
            </h4>
            <div className="regDataTable">
              <table>
                <thead>
                  <tr>
                    <th>Category</th>
                    <th data-priority="2">INR(₹)</th>
                    <th data-priority="3">USD($)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>PG/PhD Students</td>
                    <td>4000</td>
                    <td>150</td>
                  </tr>
                  <tr>
                    <td>Faculty</td>
                    <td>6000</td>
                    <td>300</td>
                  </tr>
                  <tr>
                    <td>Industry</td>
                    <td>8000</td>
                    <td>500</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="regDataField">
            <h4 className="dataFieldHeader">
              Registration Fees (valid till 15<sup>th</sup> February)
            </h4>
            <div className="regDataTable">
              <table>
                <thead>
                  <tr>
                    <th>Category</th>
                    <th data-priority="2">INR(₹)</th>
                    <th data-priority="3">USD($)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>PG/PhD Students</td>
                    <td>5000</td>
                    <td>200</td>
                  </tr>
                  <tr>
                    <td>Faculty</td>
                    <td>8000</td>
                    <td>500</td>
                  </tr>
                  <tr>
                    <td>Industry</td>
                    <td>10000</td>
                    <td>650</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="regDataField">
            <h4 className="dataFieldHeader">
              Late / On Spot  Registration Fees 
            </h4>
            <div className="regDataTable">
              <table>
                <thead>
                  <tr>
                    <th>Category</th>
                    <th data-priority="2">INR(₹)</th>
                    <th data-priority="3">USD($)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>PG/PhD Students</td>
                    <td>6000</td>
                    <td>250</td>
                  </tr>
                  <tr>
                    <td>Faculty</td>
                    <td>10000</td>
                    <td>650</td>
                  </tr>
                  <tr>
                    <td>Industry</td>
                    <td>12000</td>
                    <td>950</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="regDetails">
          <p>*All Prices including GST<br/>
           **10% additional discount if 5 & above nos. of Students/delegates pay
            at once while registering for the conference from the same
            organization.
                      </p>
          <p><b>Registration Fee Includes:</b>
            <li> Conference kit (name tag, pen, notepad, etc.)</li>
            <li>Lunch/high-tea/dinner on all days of the conference</li>
            <li>Access to all technical sessions</li>
            <li>Access to all exhibition stalls</li>
            
          </p>
          <p> <b>Note: </b>Based on the request accomidation will be arranged and charges will be shared.</p>
              <div className="button-container">
        <button className="payment-button">
          <a href="https://onlinepayment.pdpu.ac.in/conferences " rel="opener">Pay Here</a>
        </button>
      </div>
      <p><center>After Payment Register Here</center></p>
      <div className="button-container">
        <button className="register-button">
          <a href="https://forms.gle/mighpe7EFqzhmfZn6" rel="opener">Register Here</a>
        </button>
      </div>
             <p> </p>
                <p>
         
            For any quires, please email us at{" "}
            <span>
              <a className="url" href="mailto:green.hydrogen@pdpu.ac.in">
                green.hydrogen@pdpu.ac.in
              </a>
            </span>{" "}
            or{" "}
            <span>
              <a className="url" href="mailto:greenhydrogenpdpu@gmail.com">
                greenhydrogenpdpu@gmail.com
              </a>
            </span>
          </p>
        </div>
      </div>
    </>
  )
}
export default Registraionfee

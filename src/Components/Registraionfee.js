import "../assets/css/registrationfee.css"

const Registraionfee = () => {
  return (
    <>
      <div className="regFee">
        <div className="regHead">
          <h2>Registration</h2>
        </div>
        <div className="regNotes">
          <p>The last Date to Register online is 5<sup>th</sup> March 2023</p>
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
          <p>*All Prices excluding GST. </p>
          <p>**18% GST is applicable on registration fees</p>
          <p>
            10% additional discount if 5 & above nos. of Students/delegates pay
            at once while registering for the conference from the same
            organization.
          </p>
         
          <p>For payments visit this <a className="url" href="https://onlinepayment.pdpu.ac.in/conferences">
                page
              </a></p>
             <p> After Payment please fill this <a className="url" href="https://forms.gle/mighpe7EFqzhmfZn6">
                Google Form</a>.</p>
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

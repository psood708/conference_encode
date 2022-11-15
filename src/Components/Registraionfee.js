import "../assets/css/registrationfee.css"

const Registraionfee = () => {
  return (
    <>
      <div className="regFee">
        <div className="regHead">
          <h2>Registration</h2>
          <small>Pandit Deendayal Energy University, Gandhinagar</small>
          <br />
          <small>16th and 17th March, Hybrid Mode</small>
        </div>
        <div className="regData">
          <div className="regDataField">
            <h4 className="dataFieldHeader">
              Early Bird Registration Fees (valid till 15th December)
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
                    <td>Postgraduate/Research Scholar</td>
                    <td>4000</td>
                    <td>150</td>
                  </tr>
                  <tr>
                    <td>Faculty</td>
                    <td>6000</td>
                    <td>250</td>
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
              Registration Fees (valid till 15th February)
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
                    <td>Postgraduate/Research Scholar</td>
                    <td>4000</td>
                    <td>150</td>
                  </tr>
                  <tr>
                    <td>Faculty</td>
                    <td>6000</td>
                    <td>250</td>
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
              Late Registration Fees (valid till 5th March)
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
                    <td>Postgraduate/Research Scholar</td>
                    <td>4000</td>
                    <td>150</td>
                  </tr>
                  <tr>
                    <td>Faculty</td>
                    <td>6000</td>
                    <td>250</td>
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
        </div>
        <div className="regNotes">
          <p>The last Date for Registration is 5th March 2023</p>
        </div>
        <div className="regDetails">
          <p>*All Prices excluding GST. </p>
          <p>**18% GST is applicable on registration fees</p>
          <p>
            10% additional discount if 5 & above nos. of Students/delegates pay
            at once while registering for the conference from the same
            organization.
          </p>
          <p>
            For Registrations, please email us at{" "}
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

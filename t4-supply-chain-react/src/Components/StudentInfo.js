import React from "react";
import "./StudentInfo.css";
export default function StudentInfo() {
  return (
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-lg-10 col-xl-16">
          <div className="card rounded-10">
            <div className="card-body p-0 p-md-0">
              <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">
                Student Info
              </h3>
              <form>
                <div className="container">
                  <h1> Student Details Form</h1> <br />
                  <hr />
                </div>
                <table>
                  <div className="col-md-6 mb-4" />
                  <tr>
                    <td>
                      <label>Student ID: </label>
                    </td>
                    <td>
                      <input type="text "name="student id"placeholder="Student ID"size="15"required/>
                      <br/>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label> Firstname: </label>
                    </td>
                    <td>
                      <input type="text"name="firstname"placeholder="Firstname"size="15" required/>
                      <br/>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label> Lastname: </label>
                    </td>
                    <td>
                      <input type="text"name="lastname"placeholder="Lastname"size="15"required/>
                  </td>
                  </tr>
                  <tr>
                    <td>
                      <label>Contact Phone:</label>
                    </td>
                    <td>
                      <input type="tel"name="contactphone"placeholder="Contactphone"size="15"required/>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label> Twitter Handle: </label>
                    </td>
                    <td>
                      <input type="text"name="twitter handle"placeholder=" Twitter"size="15"required
                      />
                      <br />
                    </td>
                  </tr>
                  <td>
                    <label> Facebook Handle: </label>
                  </td>
                  <td>
                    <input type="text"name="facebook"placeholder=" facebook"size="15"required
                    />
                    <br />
                  </td>
                  <tr>
                    <td>  
                      <label> Personal Email:</label>
                    </td>
                    <td>
                      <input type="text"name="personalemail"placeholder="personalemail"size="15" required/>
                      <br />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label> Virtusa Email: </label>
                    </td>
                    <td>
                      <input
                        type="text"name="virtusaemail"placeholder=" virtusaemail"size="15"required
                      />
                      <br />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label> Date of Selection: </label>
                    </td>
                    <td>
                      <input type="text"name="dos "placeholder="Selection Date"size="15"required/>
                      <br />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label> State: </label>
                    </td>
                    <td>
                      <input type="text"placeholder="state"name="state"size="15"required/>
                      <br />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label> City: </label>
                    </td>
                    <td>
                      <input type="text"placeholder="city"name="city "size="15"required/>
                      <br />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label> PinCode: </label>
                    </td>
                    <td>
                      <input type="text"placeholder="pincode"name="pc "size="15"required/>
                      <br />
                    </td>
                  </tr>
                </table>
                <tr>
                  <div className="birth">
                  <label> Date Of Birth:</label>
                  <label for="birthday"></label>
                  <input type="date" id="birthday" name="birthday" /><br/>
                </div>
                </tr>
                Address 1 :
                <textarea cols="50"rows="1"placeholder=" Address"value="address"required></textarea>
                <br />
                Address 2:
                <textarea cols="50"rows="1"placeholder=" Address" value="address"required></textarea>
                <br />
                Address 3:
                <textarea cols="50"rows="1"placeholder=" Address"value="address"required></textarea>
                <br />
                <div className="container">
                  <div className="center">
                    <button type="submit" Name="nextbtn"> Next</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "./StudentInfo.css";
export default function StudentInfo() {
  return (
    <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-lg-8 col-xl-6">
                <div class="card rounded-3">
                <div class="card-body p-4 p-md-5">
                    <h3 class="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Student Info</h3>
                    <hr/>
                    <form class="px-md-2">
                
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
                <tr>
                Address 1 :
                <textarea cols="30"rows="2"placeholder=" Address"value="address"required></textarea>
                </tr>
                <tr>
                Address 2:
                <textarea cols="30"rows="2"placeholder=" Address" value="address"required></textarea>
                </tr>
                <tr>
                 <br/>
                <input type="button" align="center" class="continue-btn btn btn-success btn-lg mb-1" value="Continue"
                onClick={event =>  window.location.href='/CollegeInfo'} />

                </tr>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

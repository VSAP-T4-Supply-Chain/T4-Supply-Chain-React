import React from "react"
import "./CollegeInfo.css"

export default function CollegeInfo(){
    return(
        <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-lg-8 col-xl-6">
                <div class="card rounded-3">
                <div class="card-body p-4 p-md-5">
                    <h3 class="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">College Info</h3>
                    <hr/>
                    <form class="px-md-2">

                    <div class="form-outline mb-4">
                        <input type="text" id="CollegeName" required class="form-control" />
                        <label class="form-label" for="CollegeName">College Name</label>
                    </div>
                    <div class="form-outline mb-4">
                        <input type="text" id="CollegeId" required class="form-control" />
                        <label class="form-label" for="CollegeId">College ID</label>
                    </div>
        
                    <div class="row">
                        <div class="col-md-6 mb-4">

                            <h6 class="mb-2 pb-1">IsAutonomous</h6>
          
                            <div class="form-check">
                              <input class="form-check-input" type="radio" name="flexRadioDefault" id="Autonomous"/>
                              <label class="form-check-label" for="Autonomous">Yes</label>
                            </div>
                            <div class="form-check">
                              <input class="form-check-input" type="radio" name="flexRadioDefault" id="Non-Autonomous" checked/>
                              <label class="form-check-label" for="Non-Autonomous">No</label>
                            </div>
          
                        </div>
      
                        <div class="col-md-6 mb-4">
                            <h6 class="mb-2 pb-1">Department</h6>
                            <select class="select department" required>
                                <option value="0">Department</option>
                                <option value="cse">CSE</option>
                                <option value="ece">ECE</option>
                                <option value="mech">MECH</option>
                                <option value="it">IT</option>
                            </select>
                        </div>

                        <div class="col-md-6 mb-4" >
                          <h6 class="mb-2 pb-1">IsUniversity</h6>
                          <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="University" value="option1" checked/>
                            <label class="form-check-label" for="University">Yes</label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="Non-University" value="option2"/>
                            <label class="form-check-label" for="Non-University">No</label>
                          </div>
          
                        </div>

                        <div class="col-md-6 mb-4">
                        <h6 class="mb-2 pb-1">Current Year</h6>
                        <select class="select year" required>
                            <option value="0">Year</option>
                            <option value="1">I</option>
                            <option value="2">II</option>
                            <option value="3">III</option>
                            <option value="4">IV</option>
                        </select>
                        </div>

                        <div class="col-md-6 mb-4">
                          <h6 class="mb-2 pb-1">Current Semester</h6>
                          <select class="select" required>
                          <option value="0">Semester</option>
                          <option value="1">I</option>
                          <option value="2">II</option>
                          <option value="3">III</option>
                          <option value="4">IV</option>
                          <option value="5">V</option>
                          <option value="6">VI</option>
                          <option value="7">VII</option>
                          <option value="8">VIII</option>
                          </select>
                      </div>

                      <div class="col-md-6 mb-4">
                        <h6 class="mb-2 pb-1">Mode Of Selection</h6>
                        <select class="-" required>
                            <option value="0">Standard Recruit</option>
                            <option value="1">VSAP</option>
                            <option value="2">Jatayu</option>
                            <option value="3">Off Campus</option>
                        </select>
                        </div>
                    </div>
                    
                    
                    <input type="button" class="previous-btn btn btn-success btn-lg mb-1" value="Previous"
                    onClick={event =>  window.location.href='/'} /> 
                    <input type="button" class="continue-btn btn btn-success btn-lg mb-1" value="Submit"/>
                    </form>
        
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}
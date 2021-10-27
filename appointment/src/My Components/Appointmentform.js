import React from 'react'
import {FormControl} from 'react-bootstrap'
import { Form } from 'react-bootstrap-validation'

const mailer = () => {

    return(
        <div className="container-fluid">
        
            <div className="rowheader align-items-start">
                <h1 className="text-center">Book an Appointment !</h1>
                </br>
                <h6 className="text-center">Please Fill out the form and our representative will contact within 24hrs.</h6>
            </div>

           

            </br>

            <div className="form-group">
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <div className="row">
                    <div className="col-md-6">  
                      <label for="gender">Gender</label>
                      <select className="form-control" id="gender" required>
                        <option selected>Select</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label for="doctor">Doctor</label>
                      <select className="form-control" id="doctor">
                        <option selected>Select</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>   
                  </div>
                </div>
              <div>
            </div>
            
                <div className="form">
                    <div className="form-group">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <label for="phoneno">Name</label>
                                <div className="row">
                                    <div className="col-md-6">
                                        <input type="name" className="form-control" id="name" placeholder="Firstname" required/> 
                                    </div>
                                    <div className="col-md-6">
                                        <input type="name" className="form-control" id="name" placeholder="Lastname" required/> 
                                    </div>
                            </div>                          
                        </div>
                    </div>
                </div>

                </br>

                <div className="form-group">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-6">  
                                <label for="phoneno">Mobile No.</label>                          
                                <input type="tel" className="form-control" id="phoneno" placeholder="000 000 0000" pattern="(0|91)?[7-9][0-9]{9}" required>
                            </div>
                            <div className="col-md-6">
                                <label for="email">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="name@example.com" pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$" required>
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

                </br>

                <div className="form-group">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-6">  
                                    <label for="gender">Gender</label>
                                    <select className="form-control" id="gender" required>
                                        <option selected>Select</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <label for="doctor">Doctor</label>
                                    <select className="form-control" id="doctor">
                                        <option selected>Select</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>   
                            </div>
                        </div>
                    <div>
        </div>

            


    );
};


export default Appointmentform

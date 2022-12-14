import React, {useState, useEffect} from "react"
import {useHistory} from "react-router-dom";
import axios from "axios";
 import img from '../Images/signUp.jpg';
 import '../../src/CSS/Login/Login1.css'
//import Header from "../Common/HomePage/header/header";

//customer
const CustomerRegistration = () => {
    const history = useHistory();
    const [Name, setName] = useState("");
    const [Address, setAddress] = useState("");
    const [PhoneNumber, setPhoneNumber] = useState("");
    const [NICNumber, setNICNumber] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

//customer
    const NameSetter = (e) => {
        setName(e.target.value);
    }
    const AddressSetter = (e) => {
        setAddress(e.target.value);
    }
    const PhoneNumberSetter = (e) => {
        setPhoneNumber(e.target.value);
    }
    const NICNumberSetter = (e) => {
        setNICNumber(e.target.value);
    }
    const EmailSetter = (e) => {
        setEmail(e.target.value);
    }
    const PasswordSetter = (e) => {
        setPassword(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const newCustomer = {
            Name: Name,
            Address: Address,
            PhoneNumber: PhoneNumber,
            NICNumber: NICNumber,
            Email: Email,
            Password: Password,
        };
        axios.post('http://localhost:8070/customer/add', newCustomer).then(() => {
            alert("Registered successfully!!!");
            history.push('/');
        }).catch((err) => {
            alert(err);
        })
    }


    return (
            <div>
                
                <div className="row">
                    <div className="col-sm-2"></div>
                        <div className=" col-sm-3">
                            <div><strong></strong><label></label></div>
                            <div className=" justify-content-center align-items-center">
                                <div className="editSignup">
                                    <form method="post" className="card">
                                            <br />
                                            <h2 className="text-center">SignUp</h2>
                                            <br />
                                            <div className="container   ">
                                                <div><label>Enter Name</label><input className="form-control" required type="text" onChange={NameSetter} />
                                                </div>
                                                <div className="form-group">
                                                    <div><label>Enter Address</label><input className="form-control" required type="text" onChange={AddressSetter} />
                                                    </div>
                                                    <div><label>Enter Phone Number</label><input className="form-control" required
                                                         type="Number" onChange={PhoneNumberSetter} /></div>
                                                    <div><label>Enter NIC Number</label><input className="form-control" required maxlength="12"
                                                                                                      type="text" onChange={NICNumberSetter} /></div>
                                                    <div><label>Enter Email</label><input className="form-control" required 
                                                                                                     type="text" onChange={EmailSetter} /></div>
                                                    <div><label>Enter Password</label><input className="form-control"  required maxlength="8"
                                                                                          type="text" onChange={PasswordSetter} /></div>
                                                    <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <button className="btn-btn-primary" type="submit" onClick={onSubmit}>&nbsp;Register&nbsp;</button>
                                                    
                                                    <label>Already have an account?&nbsp; </label>
                                                      <a href={"/Login/Login"} type="submit" id={"loginbutton"} ><center><b><u>Login</ u></b></center></a><br />
                                                    <br />
                                                    <br />
                                                </div>
                                            </div>
                                    </form>
                                    </div>
                                </div>
                            </div>
                            
                        { <div className="col-sm-6 image">
                        <br></br><br></br><br></br><br></br><br></br><br></br>
                            <img src={img} loading="auto" alt="center" height="620"  
                                                                      width="600"/>
                        </div>}
                </div>
            </div>
    )
}   
export default CustomerRegistration;

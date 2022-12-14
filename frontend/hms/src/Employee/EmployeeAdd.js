import React,{useEffect, useState} from 'react';
import img from '../Images/febrian-zakaria-gwV9eklemSg-unsplash.jpg';
import {useHistory} from 'react-router-dom';
import axios from "axios";
import Header from '../Common/HomePage/header/header';
import './employee.css';
import Footer from '../Common/HomePage/footer/footer';

const EmployeeAdd = () => {

    const history = useHistory();

    const[Name, setName] = useState("");
    const[Address, setAddress] = useState("");
    const[PhoneNumber, setPhoneNumber] = useState("");
    const[NICNumber, setNICNumber] = useState("");
    const[Jobtitle, setJobtitle] = useState("");
    const[Salary, setSalary] = useState("");


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
    const JobtitleSetter = (e) => {
        setJobtitle(e.target.value);
    }

    const SalarySetter = (e) => {
        setSalary(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const newEmployee = {
            Name: Name,
            Address: Address,
            PhoneNumber: PhoneNumber,
            NICNumber: NICNumber,
            Jobtitle: Jobtitle,
            Salary: Salary
        };
        axios.post('http://localhost:8070/Employee/add', newEmployee).then(() => {
            alert("newEmployee added");
            history.push('/EmployeeView');
        }).catch((err) => {
            alert(err);
        })
    }




    return (
        <div>
             <Header/>
            <a className="btn btn-default foodPrices" href={"/EmployeeView"} >
                <i className="fa fa-arrow-left" style={{fontWeight: "bold"}}> </i> Back
            </a>
           
            <div className="row1">
                <div className="col-sm-2"></div>
                <div class=" col-sm-3">
                    <div><strong></strong><label></label></div>
                    <div class=" justify-content-center align-items-center">
                        <div>
                            <div className='editaddemployee'>
                            <form method="post" class="card">
                                <br />
                                <h2 class="text-center">Add Employee</h2>
                                <br />
                                <div className="container   ">
                                    <div><label>Full Name</label><input class="form-control" type="text" required onChange={NameSetter}/>
                                    </div>
                                    <div class="form-group">
                                        <div><label>Address</label><br/><textarea class="form-control" id="Address" name="Address" required width="100% "onChange={AddressSetter}/>
                                        </div>
                                        <div><label>Phone Number</label><input class="form-control" pattern="[0-9]"
                                                                                    type="number" min='0' required onChange={PhoneNumberSetter}/></div>
                                        <div><label>NIC Number</label><input class="form-control" required
                                                                                          type="text"onChange={NICNumberSetter}/></div>
                                        <div><label>Job Title</label><input class="form-control"  pattern="[a-z]"
                                                                                         type="text"onChange={JobtitleSetter}/></div>
                                        <div><label>Salary</label><input className="form-control" required
                                                                            type="number" min='0' onChange={SalarySetter}/></div>
                                        <br/><center>
                                        <button class="btn-btn-primary " type="submit" onClick={onSubmit}>Add Employee</button></center>
                                        <br />
                                        <br />

                                    </div>
                                </div>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='editAddEmployee'>
                { <div className="col-sm-6 image">
                    <img src={img} loading="auto" alt="center" height="600"
                         width="600"/>
                </div> }
                </div>


            </div>
            <Footer/>
        </div>
        
    )
}
export default EmployeeAdd;

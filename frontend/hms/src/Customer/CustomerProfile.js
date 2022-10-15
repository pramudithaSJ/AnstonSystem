import React, {useState, useEffect} from "react";
import axios from "axios";
import img from '../Images/Customerprofile.jpg';
import {useHistory} from "react-router-dom";
import Header from "../Common/HomePage/header/header";
import Footer from "../Common/HomePage/footer/footer";
import './customer.css';




const CustomerProfile = () => {

    const [Customer, setCustomer] = useState([]);
    const history = useHistory();

    const Logout = () => {
        localStorage.clear();
        history.push('/login');
    };

    //get logged Customer
    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        console.log(loggedInUser);
        function getCustomer() {
            axios.get("http://localhost:8070/customer/get/" + loggedInUser).then((res) => {
                setCustomer(res.data);
                console.log(res.data);
            }).catch((err) => {
            })
        }
        getCustomer();
    }, []);

    function deleteCustomer() {
        const loggedInUser = localStorage.getItem("user");
        console.log(loggedInUser);
        axios.delete('http://localhost:8070/customer/delete/' + loggedInUser).then(() => {
            localStorage.clear();
            history.push('/login');
        }).catch((err) => {
            alert(err);
        })
    }

    return (
        <div>
           
            
           
           <Header/>
           
            <div className="row">
                <div className="col-sm-2"></div>
                <div className=" col-sm-3">
                    <div><strong></strong><label></label></div>
                    <div className=" justify-content-center align-items-center">
                        <div className="editCustomerProfile">
                            <form method="post" className="card">
                                <br />
                                <br />
                                <div className="container   ">
                                    <div className="form-group">
                                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <label><h3>My Profile</h3></label> 
                                        <div><label>Name</label><input className="form-control" type="text" readOnly placeholder={Customer.Name}/>
                                        </div>
                                        <div><label>Address</label><input className="form-control"
                                                                                    type="text" readOnly  placeholder={Customer.Address}/></div>
                                        <div><label>PhoneNumber</label><input className="form-control"
                                                                                          type="text" readOnly  placeholder={Customer.PhoneNumber}/></div>
                                        <div><label>NICNumber</label><input className="form-control"
                                                                                         type="text" readOnly placeholder={Customer.NICNumber}/></div>
                                        <div><label>Email</label><input className="form-control"
                                                                             type="text" readOnly placeholder={Customer.Email}/></div>
                                        <div><label>Password</label><input className="form-control"
                                                                             type="text" readOnly placeholder={Customer.Password}/></div>
                                        <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <button className="btn-btn-danger" type="reset" onClick={() => {
                                            if (window.confirm("Are you sure you want to delete your Profile?")) {
                                                deleteCustomer()
                                            }
                                            ;
                                        }}>&nbsp;Delete</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <a href={"/CustomerProfileUpdate"} className="btn-btn-warning" type="reset">&nbsp;Update</a>
                                        <br />
                                        <br />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                { <div className="col-sm-6 image">
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                   
                        <img src={img} loading="auto" alt="center" height="520"
                            width="500"/>
                    
                </div> }
                
            </div>
            <Footer/>
        </div>
    )
}
export default CustomerProfile;
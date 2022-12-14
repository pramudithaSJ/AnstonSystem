import React,{useEffect, useState} from 'react';
import {Link, useHistory} from "react-router-dom";
import axios from "axios";
import '../CSS/Admin/tableEmployee.css';
import jsPDF from "jspdf";

const CustomerReport = () => {

    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + (today.getMinutes()<10?'0':'') + today.getMinutes() + ":" + (today.getSeconds()<10?'0':'') + today.getSeconds();
    var dateTime = date+' '+time;

    let his = useHistory();
    const [Customer, setCustomer] = useState([]);
    const [SearchWord, setSearchWord] = useState('');

    //get logged Customer
    useEffect(() => {
        function getCustomer() {
            axios.get("http://localhost:8070/customer" ).then((res) => {
                setCustomer(res.data);
                console.log(res.data);
            }).catch((err) => {
            })
        }
        getCustomer();
    }, []);

    const genaratePDF=()=>{
        let doc =new jsPDF('p','pt','a1');
        doc.html(document.querySelector('#body'),{
            callback:function (doc) {
                doc.save('CustomerReport.pdf');
            },
            margin:[60,60,60,60],
            x:32,
            y:32
        });
    }

    return (
        <div>
            <br></br>
            <div className="col-12 col-sm-6 col-md-6">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a className="btn btn-default foodPrices" href={"/AdminPanelCustomers"} >
                    <i className="fa fa-arrow-left" style={{fontWeight: "bold"}}> </i> Back
                </a>
            </div>
            {/*<Search/>*/}
            <div className="col-xs-6">
                <div className="searchBar">
                    <input type="search" className="form-control" placeholder="Search Name or NIC NUMBER" onChange={event =>{setSearchWord(event.target.value)}}/>
                </div>
            </div>
            {/*end*/}
        <div className="row1" id={'body'}>
            <div className="container" >
                <br></br>
                <div><label> Fortune Inn & Suites </label>
                </div>
                <div><label>{dateTime} </label>
                </div>
                <div className="col-11"> <br/>
                <div className="">
                    <div className="row1">
                        <div className="col-12 col-sm-6 col-md-6">
                        </div>
                        <span className="counter pull-right"></span>
                        <br/>
                    </div></div>
                    <div className="row1">
                        <div className="col-12">
                            <div className="table-responsive">
                                <table className="table1  table-hover table-bordered table-striped  tablesorter"
                                       id="ipi-table">
                                    <thead className="thead-dark">
                                    <tr>
                                        <th className="text-center">Name</th>
                                        <th className="text-center col-lg-4">Address</th>
                                        <th className="text-center">Phone number</th>
                                        <th className="text-center">NIC Number</th>
                                        <th className="text-center">Email</th>
                                    </tr>
                                    </thead>
                                    <tbody className="text-center">
                                    {Customer.filter((val)=>{
                                        if(SearchWord ==""){
                                            return val
                                        }else if(val.Name.toLowerCase().includes(SearchWord.toLowerCase())||val.NICNumber.toLowerCase().includes(SearchWord.toLowerCase()) ){
                                            return val
                                        }
                                    }).map((customer) => {
                                        return (
                                            <tr>
                                                <td>{customer.Name}</td>
                                                <td>{customer.Address}</td>
                                                <td>{customer.PhoneNumber}</td>
                                                <td>{customer.NICNumber}</td>
                                                <td>{customer.Email}</td>
                                                <br />
                                            </tr>
                                        );
                                    })}
                                    </tbody>
                                </table>
                                <br/>
                            </div>
                        </div>
                    </div></div>
            </div>
        </div>
    <Link className="btngenerate" role="button" id={"generate"}onClick={genaratePDF}>
        Generate Report&nbsp;&nbsp;
        <em className="fa fa-file-pdf-o" id="icon"></em>
    </Link>
</div>
    )
}
export default CustomerReport;

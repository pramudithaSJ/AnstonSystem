import React from "react";
import "./AdminNav.css"
import {FaPizzaSlice} from "react-icons/fa"
import{FaHouseUser} from "react-icons/fa"
import{FaBookmark} from "react-icons/fa"
import{FaRegIdBadge} from "react-icons/fa"
import{FaMoneyCheckAlt} from "react-icons/fa"
import{FaUserTie} from "react-icons/fa"




function AdminNav(){

    return(
        <section className="sidebar">
                <section className="logo"> </section>
                <section className="menus">
                <section><a href="/foods" className="Adnavbar-item"><i className="icon"><FaPizzaSlice/></i>Foods </a></section>
                <section><a href="/" className="Adnavbar-item"><i className="icon"><FaHouseUser/></i>Rooms</a></section>
                <section><a href="/" className="Adnavbar-item"><i className="icon"><FaBookmark/></i>Room Booking</a></section>
                <section><a href="/EmployeeView" className="Adnavbar-item"><i className="icon"><FaRegIdBadge/></i>Employees</a></section>
                <section><a href="/" className="Adnavbar-item"><i className="icon"><FaMoneyCheckAlt/></i>payment</a></section>
                <section><a href="/" className="Adnavbar-item"><i className="icon"><FaUserTie/></i>Customers</a></section>
                </section>
        <section className="adminfooter">
            <h3> Designed By SEJ022</h3>

        </section>

        </section>
    )


}

export default AdminNav;
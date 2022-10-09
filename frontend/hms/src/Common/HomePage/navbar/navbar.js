import React from "react";
import './navbar.css'

function Navbar(){

return(
    <section className="navbar">
      <a href="/" className="navbar-item">Home</a>
      <a href="/about" className="navbar-item">Contact Us</a>
      <a href="/CustomerProfile" className="navbar-item">My Profile</a>
      <a href="/CustomerRegistration" className="navbar-item">Sign up</a>
      <a href="/Login" className="navbar-item">Login</a>
      <a href="/Login" className="navbar-item">Logout</a>
  </section>
)

}
export default Navbar;
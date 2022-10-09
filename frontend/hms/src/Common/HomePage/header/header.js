import React from "react";
import Navbar from "../navbar/navbar";
import './header.css';
import './logo.png'


function Header(){

return (
    <section className="header">
      <section className="header-top">
        <div className="headerLogo">
        <section className="header-top__logo">
          <a href="/" className="header-logo">
        
          </a>
        </section>
        </div>
        <section className="header-top__navbar">
          <section className="header-top__navigation">
            <Navbar />
          </section>
          <hr className="header-top__seperator" />
        </section>
      </section>
      <section className="header-bottom">
        <section className="header-bottom__phone">
        
        </section>
        <section className="header-bottom__email">
        
        </section>
      </section>
    </section>
    
)

}
export default Header;
import React from 'react';

import './footer.css';

function Footer () {

  return (
    <section className="footer">
      <hr className="footer-seperator" />
      
      <section className="footer-info">
        <section className="footer-info-left">
          
          <section className="footer-info__image">
          <a href="/home" className="header-logo">
         
          </a>

          </section>      
        </section>
      

        <section className="footer-info-center">

          <section className="footer-info__email">
            Company
          </section>
          <section className="footer-info__terms">
            Login
            <br />
           Sign Up
           <br/>
           Contact Us
          </section>
        </section>
        <section className="footer-info-right">
          <section className="footer-info__number">
           Contact Info
          </section>
          <section className="footer-info__contact">
           Phone - 0112452678
            <br />
           Email - HotelAnniston@gmai.com
           <br />
           Location - 100 Smart Street,Colombo 5
          </section>
        </section>
      </section>
      <hr className="footer-seperator" />
    </section>
  )

}

export default Footer;
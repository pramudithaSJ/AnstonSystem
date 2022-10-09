import React from "react";
import { ReactDOM } from "react";
import './Homepage.css';
import Header from "./header/header";
import Footer from "./footer/footer";
import './images/homepage.jpg'




function Homepage(){


return(

<section >
       <Header/>
        <section className="middle_body">
            <section className="homepage_image">
            </section>
            <section className="our_service">Our Services </section>
            <section className="grid_view">
                    <section className="card">
                        <section className="mainimage"></section>
                        <button className="button"> Rooms</button>
                    </section>
                    <section className="card">
                        <section className="mainimage1"></section>
                        <button className="button"> Foods</button>
                    </section>
                    <section className="card">
                        <section className="mainimage2"></section>
                        <button className="button"> Palces</button>
                    </section>
            </section>


        </section>

        <Footer/>
       
</section>



)

}
export default Homepage;
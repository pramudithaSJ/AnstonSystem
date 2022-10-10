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
                        <a href="/ViewAllRooms"><button className="button"> Rooms</button></a>
                    </section>
                    <section className="card">
                        <section className="mainimage1"></section>
                        <a href="/customerViewFood"><button className="button"> Foods</button></a>
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
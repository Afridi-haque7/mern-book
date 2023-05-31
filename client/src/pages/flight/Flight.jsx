import React from "react";
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import Footer from '../../components/footer/Footer'
import "./flight.css"


const Flight = () => {
    return(
        <div>
            <Navbar/>
            <Header type="list"/>
            <div className="container">
                Flight page<br></br>
                Page still in Progress[■■■□□□□□□□]
            </div>
            <Footer/>
        </div>
    )
}

export default Flight
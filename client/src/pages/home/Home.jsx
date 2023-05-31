import React from 'react'
import "./home.css"
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Featured from '../../components/featured/Featured'
import PropertyList from '../../components/propertyList/PropertyList'
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'


const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <div className="homeContainer">
          <Featured />
          <h2 className="homeTitle">Browse by property type</h2>
          <PropertyList/>
          <h2 className="homeTitle">Browse by highest rating</h2>
          <FeaturedProperties/>
          <MailList/>
          <Footer/>
        </div>
        
    </div>
  )
}

export default Home

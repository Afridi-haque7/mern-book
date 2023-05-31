import React, {useState, useContext} from 'react'
import { useNavigate, NavLink } from "react-router-dom";
import "./header.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBed,
        faPerson,
        faPlane, 
        faCar, 
        faTaxi, 
        faCalendarDays} from "@fortawesome/free-solid-svg-icons"
import {DateRange} from 'react-date-range';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import {format} from "date-fns"
import { SearchContext } from '../../context/SearchContext';




const Header = ({type}) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();
  const handleOption = (name, operation) => {
    setOptions(prev => {return {
      ...prev, [name] : operation === "i" ? options[name] + 1 : options[name] - 1,
    }})
  }

  const {dispatch} = useContext(SearchContext);
  const handleSearch = () =>{
    dispatch({type:"NEW_SEARCH", payload:{destination, date, options}})
    navigate("/hotels", {state: {destination, date, options}})
  }

  const handleLogin = () =>{
    navigate("/login")
  }

  return (
    <div className="header">
      <div className={type === "list" 
      ? "headerContainer listMode" 
      : "headerContainer"}>
      <div className="headerList">
        <NavLink to="/" className="headerListItem" >
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
        </NavLink>
        <NavLink to="/flights" className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
        </NavLink>
        <NavLink to="/cars" className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rentals</span>
        </NavLink>
        <NavLink to="/taxi" className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxi</span>
        </NavLink>
      </div>


      {type !== "list" &&
        <>
      <h1 className="headerTitle">
      The perfect stay, just a click away
      </h1>
      <p className="headerDesc">
      Experience luxury at an affordable price with our limited-time hotel deals.      </p>
      <button 
      className="headerBtn"
      onClick={handleLogin}
      >Sign in / Register</button>
      
      <div className="headerSearch">
        <div className="headerSearchItem">
          <FontAwesomeIcon icon={faBed} className="headerIcon" />
          <input 
          type="text" 
          placeholder="where are you going?"
          className="headerSearchInput"
          onChange={(e) => setDestination(e.target.value)} 
          />
        </div>
        <div className="headerSearchItem">
          <FontAwesomeIcon 
          icon={faCalendarDays} 
          className="headerIcon"
          />
          <span 
          onClick={() => setOpenDate(!openDate)} 
          className='headerSearchText'>
          {`${format(date[0].startDate, "MM/dd/yyyy")} 
          to ${format(date[0].endDate, "MM/dd/yyyy")}`}
          </span>
          {openDate && 
          <DateRange
            editableDateInputs={true}
            onChange={item => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className="date"
            minDate={new Date()}
          />}
        </div>
        <div className="headerSearchItem">
          <FontAwesomeIcon 
          icon={faPerson} 
          className="headerIcon"/>
          <span 
          onClick={() => setOpenOptions(!openOptions)} 
          className="headerSearchText">
          {`${options.adult} adult . 
          ${options.children} children . 
          ${options.room} room`}
          </span>
          {openOptions && <div className="options">
            <div className="optionItem">
              <span className="optionText">Adult</span>
              <div className="optionCounter">
                <button 
                disabled={options.adult <= 1}
                className="optionCounterButton" 
                onClick={() => handleOption("adult", "d")} >-</button>
                <span className="optionCounterNumber">{options.adult}</span>
                <button 
                className="optionCounterButton" 
                onClick={() => handleOption("adult", "i")}>+</button>
              </div>
            </div>
            <div className="optionItem">
              <span className="optionText">Children</span>
              <div className="optionCounter">
              <button 
              disabled={options.children <= 0}
              className="optionCounterButton" 
              onClick={() => handleOption("children", "d")}>-</button>
              <span className="optionCounterNumber">{options.children}</span>
              <button 
              className="optionCounterButton" 
              onClick={() => handleOption("children", "i")}>+</button>
              </div>
            </div>
            <div className="optionItem">
              <span className="optionText">Room</span>
              <div className="optionCounter">
              <button 
              disabled={options.room <= 1}
              className="optionCounterButton" 
              onClick={() => handleOption("room", "d")}>-</button>
              <span className="optionCounterNumber">{options.room}</span>
              <button 
              className="optionCounterButton" 
              onClick={() => handleOption("room", "i")}>+</button>
              </div>
            </div>
          </div>}
        </div>
        <div className="headerSearchItem">
          <button className="headerBtn" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div></>}


      </div>
    </div>
  )
}

export default Header

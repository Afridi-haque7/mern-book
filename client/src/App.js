import './App.css';
import{BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Hotel from "./pages/hotel/Hotel";
import Flight from "./pages/flight/Flight";
import Cars from "./pages/cars/Cars";
import Taxi from "./pages/taxi/Taxi";
import Login from "./pages/login/Login";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/hotels" element={<List/>} />      
        <Route path="/hotels/:id" element={<Hotel/>} />
        <Route path="/flights" element={<Flight/>}/>
        <Route path="/cars" element={<Cars/>}/>
        <Route path="/taxi" element={<Taxi/>}/>
        <Route path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Coverhero from "./components/coverPage/Coverhero";
import Profile from "./pages/profile/Profile";
import Events from "./pages/events/Events";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Coverhero />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </Router>
  );
}

export default App;


// import React from 'react'
// import Eventtype from './pages/events/Events'
// export default function  () {
//   return (
//     <div>
//       <Eventtype/>
      
//     </div>
//   )
// }

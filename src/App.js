import "./App.css";
import Dash from "./componet/dash/Dash";
import Navbar from "./componet/navbar/Navbar";
import Sidebar from "./componet/Sidebar/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/home/Home";
import Setting from "./Pages/setting/Setting";
import Ticketcontrol from "./Pages/ticketcontrol/Ticketcontrol";
import Ticketlist from "./Pages/ticketlist/Ticketlist";
function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="container">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/ticketcontrol" element={<Ticketcontrol />} />
            <Route path="/ticketlist" element={<Ticketlist />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

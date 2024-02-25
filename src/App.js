import "./App.css";
import Navbar from "./components/navbar";
import { Outlet } from "react-router-dom";
import Modal from "./components/ScheduleModal";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div class="sm:ml-64 ">
        <Outlet />
      </div>
    </div>
  );
}

export default App;

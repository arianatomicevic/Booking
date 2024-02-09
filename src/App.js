import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homescreen from "./screens/Homescreen";
import Bookingscreen from "./screens/Bookingscreen";
import Registerscreen from "./screens/Registerscreen";
import Loginscreen from "./screens/Loginscreen";
import Homepage from "./page/Homepage";
import Bookinginfo from "./screens/Bookinginfo";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/home" element={<Homescreen />} />
          <Route path="/book" element={<Bookingscreen />} />
          <Route
            path="/book/:roomid/:fromdate/:todate"
            element={<Bookingscreen />}
          />
          <Route path="/register" element={<Registerscreen />} />
          <Route path="/login" element={<Loginscreen />} />
          <Route
            path="/Bookinginfo/:roomid/:fromdate/:todate"
            element={<Bookinginfo />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

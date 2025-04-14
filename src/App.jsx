import "./index.css";
import Home from "./Components/pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Pages/Login/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

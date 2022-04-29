import { BrowserRouter , Route, Routes } from "react-router-dom";
import './App.css';
import Login from "./components/Login";
import Register from "./components/Register";
import Dashbord from "./components/Dashboard";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    
    <BrowserRouter>
        <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/register" element={<Register/>} />
      <Route path="/dashboard" element={<Dashbord/>} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;

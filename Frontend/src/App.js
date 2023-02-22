import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddCarDetail from "./components/AddCarDetailForm";
import SignupForm from "./components/SignupForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignupForm />} />
        <Route path="/addcardetail" element={<AddCarDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

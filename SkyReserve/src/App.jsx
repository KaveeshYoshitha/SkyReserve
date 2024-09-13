import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"; // Assuming Home.jsx is in the same directory
import Login from "./pages/Login";
import Book from "./pages/Book";
import Navbar from "./components/Navbar";
import SignUp from "./pages/SignUp";
import Deals from "./pages/Deals";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="" element={<Navbar />} /> */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <Book />
              <Deals />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;

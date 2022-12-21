import "./global-styled.scss";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import SigninPage from "./pages/signin";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
    
  )
}

export default App

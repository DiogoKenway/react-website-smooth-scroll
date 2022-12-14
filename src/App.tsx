import "./global-styled.scss";

import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar/>
    </Router>
    
  )
}

export default App

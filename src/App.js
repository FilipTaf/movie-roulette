import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import History from "./views/history";
import Navibar from "./components/navbar";

function App() {
  return (
    <Router>
      <Navibar />
      <Routes>
        <Route path="/src/views/history" element={<History />} />
      </Routes>
    </Router>
  );
}

export default App;

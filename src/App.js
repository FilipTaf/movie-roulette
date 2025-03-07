import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import History from "./views/history";
import Navibar from "./components/navbar";
import MyNavbar from "./components/navbar";
import Mainbody from "./components/restWebpage";

function App() {
  return (
    <>
    <Router>
      <MyNavbar />
      <Routes>
        <Route path="/src/views/history" element={<History />} />
      </Routes>
    </Router>
    <Mainbody />
    </>
  );
}

export default App;

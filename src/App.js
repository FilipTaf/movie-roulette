import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import History from "./views/history";
import MyNavbar from "./components/navbar";
import Mainbody from "./components/restWebpage";
import Favorites from "./views/favorites";

function App() {
  return (
    <>
      <Router>
        <MyNavbar />
        <Routes>
          <Route path="/src/views/history" element={<History />} />
          <Route path="/src/views/favorites" element={<Favorites />} />
        </Routes>
      </Router>
      <Mainbody />
    </>
  );
}

export default App;

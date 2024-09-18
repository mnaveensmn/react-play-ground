import "./App.css";
import { Routes, Route } from "react-router-dom";
import App2 from "./Components/App2/App2";
import App1 from "./Components/App1/App1";
import Navbar from "./Components/Navbar/NavBar";
import { Container } from "react-bootstrap";
import MuiDataGrid from "./Components/MuiDataGrid/MuiDataGrid";

const App = () => {
  return (
    <Container className="App" id="outer-container">
      <Navbar />
      <Container id="page-wrap">
        <Routes>
          <Route path="/" element={<MuiDataGrid />} />
          <Route path="/app1" element={<App1 />} />
          <Route path="/app2" element={<App2 />} />
          <Route path="/mui-data-grid" element={<MuiDataGrid />} />
        </Routes>
      </Container>
    </Container>
  );
};

export default App;

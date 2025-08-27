import "./assets/styles/Globalstyle.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import MyCV from "./pages/MyCV";
import Tbd_2 from "./pages/Tbd_2";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import zakImg from "./assets/zak.jpg";
import spaceImg from "./assets/space.jpeg";

function App() {
  return (
    <Router>
      <Banner
        backgroundImage={spaceImg}
        name="Zak Troy"
        title="Future Fullstack Developer"
        profilePicSrc={zakImg}
        profilePicAlt="Zak Troy"
      />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/cv" element={<MyCV />} />
        <Route path="/tbd" element={<Tbd_2 />} />
      </Routes>
    </Router>
  );
}

export default App;

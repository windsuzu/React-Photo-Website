import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";
import "./styles/style.css";

function App() {
    return (
        <>
            <Nav />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="about" element={<About />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;

import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs"
import NotFound from "./pages/NotFound";
import Nav from "./components/Nav/Nav"


function App() {
  return (
      <BrowserRouter>
        <Nav/>
        <Routes>
            <Route index element={<Home/>}/>
            <Route path = "about" element = {<About/>}/>
            <Route path = "blogs" element = {<Blogs/>}/>
            <Route path = "contact" element = {<Contact/>}/>
            <Route path = "*" element = {<NotFound/>}/>
        </Routes>
      </BrowserRouter>
      
  );
}

export default App;

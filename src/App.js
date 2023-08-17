import './App.css';
import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom";
// import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Nav from "./components/Nav/Nav";
import Programs from "./pages/Programs";
import FAQs from "./pages/FAQs";
import Testimonials from './pages/Testimonials';
const LazyAbout = React.lazy(()=>(import("./pages/About")))

function App() {
  return (
      <BrowserRouter>
        <Nav/>
        <Routes>
            <Route index element={<Home/>}/>
            <Route path = "/about" element = {<React.Suspense fallback="Loading..."><LazyAbout/></React.Suspense>}/>
            <Route path = "/contact" element = {<Contact/>}/>
            <Route path = "/programs" element = {<Programs/>}/>
            <Route path = "/faq" element = {<FAQs/>}/>
            <Route path = "/testimonials" element = {<Testimonials/>}/>
            <Route path = "*" element = {<NotFound/>}/>
        </Routes>
      </BrowserRouter>
      
  );
}

export default App;

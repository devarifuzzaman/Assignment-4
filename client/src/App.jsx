import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Service from "./pages/Service.jsx";
import Contact from "./pages/Contact.jsx";
import Blog from "./pages/Blog.jsx";
import SingleBlogSec from "./components/blogPage/SingleBlogSec.jsx";
// import Loader from "./components/Loader.jsx";
import { Analytics } from "@vercel/analytics/react"

const App = () => {
    return (
        <BrowserRouter>
            <Analytics />
            {/*<Loader/>*/}
         <Routes>
             <Route path="/" element={<Home/>} />
             <Route path="/about" element={<About/>} />
             <Route path="/service" element={<Service/>} />
             <Route path="/contact" element={<Contact/>} />
             <Route path="/blog" element={<Blog/>} />
             <Route path={"/singleBlogSec"}  element={<SingleBlogSec/>} />
         </Routes>
        </BrowserRouter>
    );
};

export default App;
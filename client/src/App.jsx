import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Service from "./pages/Service.jsx";
import Contact from "./pages/Contact.jsx";
import Blog from "./pages/Blog.jsx";
import Login from "./pages/login.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import DasHome from "./pages/dashboard/Home.jsx";
import Category from "./pages/dashboard/Category.jsx";
import DasBlog from "./pages/dashboard/Blog.jsx";
import DasService from "./pages/dashboard/Service.jsx";
import {Toaster} from "react-hot-toast";
import Team from "./pages/dashboard/Team.jsx";
import SingleBlog from "./components/SingleBlog.jsx";



const App = () => {
    return (

        <BrowserRouter>
            <Toaster position='bottom-center' reverseOrder={false} />
         <Routes>

             <Route path="/" element={<Home/>} />
             <Route path="/about" element={<About/>} />
             <Route path="/service" element={<Service/>} />
             <Route path="/contact" element={<Contact/>} />
             <Route path="/blog" element={<Blog/>} />
             <Route path="/singleBlog/:id" element={<SingleBlog/>} />
             <Route path="/login" element={<Login/>} />

            //Private Route
             <Route element={<PrivateRoute />}>
                 <Route path="/dashboard" element={<DasHome />} />
                 <Route path="/category" element={<Category />} />
                 <Route path="/dasblog" element={<DasBlog />} />
                 <Route path="/dasservice" element={<DasService />} />
                 <Route path="/team" element={<Team />} />
             </Route>
         </Routes>
        </BrowserRouter>
    );
};

export default App;
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import DetalleBlog from "./pages/Home/DetalleBlog";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {AuthProvider} from "./context/AuthContext";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import CrearBlog from "./pages/crear-blog/CrearBlog";
import MisBlogs from "./pages/mis-blogs/MisBlogs";
import ModificarBlog from "./pages/modificar-blog/ModificarBlog";
import MisProductos from "./pages/mis-productos/MisProductos";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs/:id" element={<DetalleBlog />} />
          <Route path="/crear-blog" element={<CrearBlog/>} />
          <Route path="/modificar-blog/:idblog" element={<ModificarBlog/>} />
          <Route path="/mis-blogs" element={<MisBlogs/>} />
          <Route path="/mis-productos" element={<MisProductos/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

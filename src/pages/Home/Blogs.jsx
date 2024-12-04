import "./Blogs.css";
import { Link } from "react-router-dom";
const Blog = ({ blog }) => {
  console.log(blog);
  return (
    <div className="contenedorCard">
      <img src={blog.imagen} alt={blog.titulo} className="imagen" />
      <div className="datos">
        <h2 className="titulo">{blog.titulo}</h2>
        <div className="subtitulo">
          <p className="autor">{blog.author || "autor por defecto"}</p>
          <p>{new Date(blog.fechaPublicacion).toLocaleString("es")}</p>
        </div>
        <p className="description">{blog.descripcion}</p>
        <Link to={`/blogs/${blog.id}`}className="verMas">Ver mas</Link>
      </div>
    </div>
  );
};

export default Blog;

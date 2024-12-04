import "./../Home/Blogs.css";
import { Link } from "react-router-dom";
const BlogAdmin = ({ blog, handleDelete}) => {
  console.log(blog);

    const eliminarBlog = () => {
        handleDelete(blog.id)

    }

  return (
    <div className="contenedorCard">
      <img src={blog.imagen} alt={blog.titulo} className="imagen" />
      <div className="datos">
        <h2 className="titulo">{blog.titulo}</h2>
        <div className="subtitulo">
          <p className="autor">{blog.author|| "autor por defecto"}</p>
          <p>{new Date(blog.fechaPublicacion).toLocaleString("es")}</p>
        </div>
        <p className="description">{blog.descripcion}</p>
        <Link to={`/modificar-blog/${blog.id}`}>
          <button>Modificar</button>
        </Link>
        <button onClick={()=>eliminarBlog()}> Eliminar</button>
      </div>
    </div>
  );
};

export default BlogAdmin;

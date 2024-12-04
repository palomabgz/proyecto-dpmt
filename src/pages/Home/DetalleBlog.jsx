import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import "./DetalleBlog.css"
import { Link } from "react-router-dom";
const DetalleBlog = () => {
  const backurl = import.meta.env.VITE_BACK_URL
    const { id } = useParams()
    const [blog, setBlog] = useState({});
    
    useEffect(() => {
      const fetchback = async () => {
        const response = await fetch(`${backurl}blogs/${id}`)
      const responsejson = await response.json()
      console.log(responsejson.data)
      setBlog(responsejson.data)
      }
      fetchback()
    },[])
    
    return (
        <div className="contenedorDetalle">
        <img src={blog.imagen} alt={blog.titulo} className="imagen" />
        <div className="datos">
          <h2 className="titulo">{blog.titulo}</h2>
          <div className="subtitulo">
            <p className="autor">{blog.author || "autor por defecto"}</p>
            <p>{new Date(blog.fechaPublicacion).toLocaleString("es")}</p>
          </div>
          <p className="description">{blog.descripcion}</p>
          <p className="content">{blog.contenido}</p>
          <div className="Btn">
          <Link to={`/`} className="verMas">Volver</Link>
          </div>
        </div>
        
      </div>
    )
}

export default DetalleBlog
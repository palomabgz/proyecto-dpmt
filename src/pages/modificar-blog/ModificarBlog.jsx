import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const ModificarBlog = () => {
  const backurl = import.meta.env.VITE_BACK_URL
  const { idblog } = useParams();
  const [blog, setBlog] = useState({});
  const [titulo, setTitulo] = useState(blog?.title);
  const [imagen, setImagen] = useState(blog?.urlToImage);
  const [descripcion, setDescripcion] = useState(blog?.description);
  const [contenido, setContenido] = useState(blog?.content);

  useEffect(() => {
    const fetchBack = async () => {
      const response = await fetch(`${backurl}blogs/${idblog}`);
      const responsejson = await response.json();
      console.log(responsejson.data);
      setBlog(responsejson.data);
    };
    fetchBack();
  },[])

  useEffect(() => {
    setTitulo(blog.titulo)
    setImagen(blog.imagen)
    setDescripcion(blog.descripcion)
    setContenido(blog.contenido)
  },[blog])


  const navigate = useNavigate();



  const handleSubmit = async (e) => {
    e.preventDefault();
    const blog = {
      titulo: titulo,
      descripcion: descripcion,
      contenido: contenido,
      imagen: imagen,
      //author: "user1",
    };
    
    const respuesta = await handlefetch(blog)
    console.log(respuesta);
    console.log(respuesta.ok)
    if(respuesta.status === "success"){
      toast.success("Blog modificado");
      navigate("/mis-blogs");
    }else{
      toast.error("Blog no modificado");
    }
  };

  const handlefetch = async (blog) => {
    const response = await fetch(`${backurl}blogs/${idblog}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    })
    const responsejson = await response.json()
    return responsejson
  }

  return (
    <div className="contenedor">
      <form onSubmit={handleSubmit} className="form">
        <h1>Modificar Blog</h1>
        <div className="input">
          <label htmlFor="titulo" className="label">
            Titulo
          </label>
          <input
            type="text"
            id="titulo"
            onChange={(e) => setTitulo(e.target.value)}
            value={titulo}
          />
        </div>
        <div className="input">
          <label htmlFor="descripcion" className="label">
            Descripcion
          </label>
          <input
            type="text"
            id="descripcion"
            onChange={(e) => setDescripcion(e.target.value)}
            value={descripcion}
          />
        </div>
        <div className="input">
          <label htmlFor="contenido" className="label">
            Contenido
          </label>
          <textarea
            name=""
            id="contenido"
            onChange={(e) => setContenido(e.target.value)}
            cols={"50"}
            rows={"10"}
            value={contenido}
          ></textarea>
        </div>
        <div className="input">
          <label htmlFor="imagen" className="label">
            Imagen
          </label>
          <input
            type="text"
            id="imagen"
            onChange={(e) => setImagen(e.target.value)}
            value={imagen}
          />
        </div>

        <button type="submit" className="boton">
          Modificar
        </button>
      </form>
    </div>
  );
};

export default ModificarBlog;

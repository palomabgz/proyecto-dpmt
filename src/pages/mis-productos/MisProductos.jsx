import { useState,useEffect } from "react";
const MisProductos = () => {
    const [isLoading,setIsLoading] = useState(true)
    const [productos,setProductos] = useState([])
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)

    const fetchProductos = async () => {
        const resultado = await fetch(`http://localhost:3000/productos/paginado?page=${page}&limit=2`)
        const resultadojson = await resultado.json()
        setProductos(resultadojson.data.productos)
        setTotalPages(resultadojson.data.cantidadPaginas)
        setIsLoading(false)
        console.log(resultadojson.data.productos)
    }

    const handleNext = () => {
        setPage(page+1)
    }

    const handlePrev = () => {
        setPage(page-1)
    }

    useEffect(() => {
        fetchProductos()
    },[page])

    if (isLoading) {
        return (
            <div>Cargando...</div>
        )
    }

    return (
        <div>
            <div>
                {productos.map((producto) => (
                    <div key={producto.id}>{producto.nombre}</div>
                ))}
            </div>
            <button onClick={handlePrev} disabled={page === 1}>Anterior</button>
            <button onClick={handleNext} disabled={page === totalPages}>Siguiente</button>
        </div>
    );
};

export default MisProductos;
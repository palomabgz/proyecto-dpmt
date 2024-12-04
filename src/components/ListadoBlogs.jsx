import { useEffect, useState } from "react";
import Blog from "../pages/Home/Blogs";
import BlogAdmin from "../pages/mis-blogs/BlogsAdmin";
const ListadoBlogs = ({ isLogged = false }) => {
  const backurl = import.meta.env.VITE_BACK_URL
  const [blogs, setBlogs] = useState([]);
  let blogsFilter = blogs

  const fetchback = async () => {
    const response = await fetch(`${backurl}blogs`)
  const responsejson = await response.json()
  console.log(responsejson.data)
  setBlogs(responsejson.data)
  }

  const fetchBorrarBlog = async (id) => {
    const response = await fetch(`${backurl}blogs/${id}`, { 
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
  const responsejson = await response.json()
  console.log(responsejson.data)
  fetchback()
  }


  useEffect(() => {
    fetchback()
  },[])

  const handleDelete = (id) => {
    fetchBorrarBlog(id)

  }

  if (isLogged) {

      blogsFilter = blogs || []
    return (
      <>
        {blogsFilter?.map((blog) => (
          <BlogAdmin blog={blog} key={blog.id} handleDelete={handleDelete} />
        ))}
      </>
    );
  }

  return (
    <>
      {blogs.map((blog) => (
        <Blog blog={blog} key={blog.id} />
      ))}
    </>
  );
};

export default ListadoBlogs;

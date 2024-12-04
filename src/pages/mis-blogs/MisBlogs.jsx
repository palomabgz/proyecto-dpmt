import ListadoBlogs from "../../components/ListadoBlogs";
const MisBlogs = () => {
  //hardcodear poner autor por defecto Investing.com

  return (
    <>
      <h1>Mis Blogs</h1>
      <ListadoBlogs isLogged={true} />
    </>
  );
};

export default MisBlogs;

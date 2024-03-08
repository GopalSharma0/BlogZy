import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Blogs from "./pages/Blogs";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserBlogs from "./pages/UserBlogs";
import CreateBlog from "./pages/CreateBlog";
import BlogDetails from "./pages/BlogDetails";
import { Toaster } from "react-hot-toast";
import { useLocation } from "react-router-dom";
function App() {
  const location = useLocation();
  return (
    <>
      <Header />
      <Toaster />
      <Routes>
        <Route path="/" element={<Blogs />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/create-blog" element={<CreateBlog />}></Route>
        <Route
          path="/my-blogs"
          className={location.pathname === "/my-blogs" ? "active" : ""}
          element={<UserBlogs />}
        ></Route>
        <Route path="/blog-details/:id" element={<BlogDetails />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </>
  );
}

export default App;

import BlogComp from "../../components/blogComponent";
import Footer from "../../components/footer";
import Modals from "../../components/modals";
import Navbar from "../../components/navbar";


const Blog = () => {
    return (
        <>
          <Navbar/>
          <BlogComp/>
          <Modals/>
          <Footer/>  
        </>
    );
}

export default Blog;

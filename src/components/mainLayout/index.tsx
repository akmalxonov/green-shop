import Footer from "../footer";
import Navbar from "../navbar";
import StoreProducts from "./store-products";
import Swiper from "./swiper";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Swiper />
      <StoreProducts />
      <Footer/>
    </div>
  );
};

export default MainLayout;

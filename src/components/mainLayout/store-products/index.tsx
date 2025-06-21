import Products from "./praducts";
import Categories from "./category";
import "../store-products/story.scss";
const StoreProducts = () => {
  return (
    <>
      <div className="container">
        <div className="store-categories">
          <Categories />
          <Products />
        </div>
      </div>
    </>
  );
};

export default StoreProducts;


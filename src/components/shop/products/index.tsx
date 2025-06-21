import Card from "./card";
import "../products/products.scss";
import { useReduxSelector } from "../../../hooks/useRedux";
import { Empty } from "antd";
const ShopProducts = () => {
  const { data } = useReduxSelector((state) => state.cardSlice);
  return (
    <div>
      <div className="cart-header">
        <h2 className="cart-header__col cart-header__product">Products</h2>
        <h2 className="cart-header__col cart-header__price">Price</h2>
        <h2 className="cart-header__col cart-header__quantity">Quantity</h2>
        <h2 className="cart-header__col cart-header__total">Total</h2>
        <h3 className="cart-header__delete">Delete</h3>
      </div>
      {!data.length ? (
        <Empty />
      ) : (
        data.map((value) => <Card key={value._id} {...value} />)
      )}
    </div>
  );
};

export default ShopProducts;

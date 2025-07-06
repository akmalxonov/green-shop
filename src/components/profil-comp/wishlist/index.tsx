import { Empty } from "antd";
import { useReduxSelector } from "../../../hooks/useRedux";
import CardComp from "../../mainLayout/store-products/praducts/card";
import "../wishlist/wishlist.scss"

const Wishlist = () => {
  const { data } = useReduxSelector((state) => state.likeSlice);

  if (!data.length) {
    return <Empty className="empty" />;
  }

  return (
    <div className="wrapper">
      {data.map((product) => (
        <CardComp key={product._id} {...product} />
      ))}
    </div>
  );
};

export default Wishlist;

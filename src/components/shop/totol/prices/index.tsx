import { useReduxSelector } from "../../../../hooks/useRedux";
import "../prices/prices.scss";

const Prices = () => {
  const coupon_title_style = "text-[#303030] text-[15px] font-normal";
  const { data = [], coupon = 0 } = useReduxSelector(
    (state) => state.cardSlice || {}
  );
  console.log("data", data);
  console.log("coupon", coupon);
  const totalPrice = data.reduce((acc, value) => (acc += value.userPrice), 0);
  const discountPrice = (totalPrice * coupon) / 100;
  const shippingTotol = totalPrice+16
  return (
    <div className="cart-summary">
      <div className="summary-row">
        <div className="summary-item">
          <h3 className={`${coupon_title_style}`}>Subtotal:</h3>
          <h2 className="summary-value">{totalPrice.toFixed(2)}</h2>
        </div>
      </div>

      <div className="summary-row">
        <div className="summary-item">
          <h3 className={`${coupon_title_style}`}>Coupon Discount:</h3>
          <h2 className="summary-discount">{discountPrice.toFixed(2) || 0}</h2>
        </div>
      </div>

      <div className="summary-row">
        <div className="summary-item">
          <h3 className={`${coupon_title_style}`}>Shiping:</h3>
          <h2 className="summary-shipping">$16.00</h2>
        </div>
      </div>

      <div className="summary-total">
        <div className="total-row">
          <h2 className="total-label">Total:</h2>
          <div className="total-amount">
            <h1 className={`${Boolean(coupon) && "line-through"}`}>{shippingTotol?.toFixed(2)}</h1>
          </div>
        </div>
        {Boolean(coupon) && (
          <h1 className="discounted-total">
            {Boolean(coupon)
              ? (shippingTotol - discountPrice).toFixed(2)
              : totalPrice.toFixed(2)}
          </h1>
        )}
      </div>
    </div>
  );
};

export default Prices;

import { useReduxSelector } from "../../../hooks/useRedux";
import type { FC } from "react";
import "../totol/totol.scss";

const Total: FC = () => {
  const coupon_title_style = "text-[#303030] text-[15px] font-normal";
  const { data = [], coupon = 0 } = useReduxSelector(
    (state) => state.cardSlice || {}
  );
  console.log("data", data);
  console.log("coupon", coupon);
  const totalPrice = data.reduce((acc, value) => (acc += value.userPrice), 0);
  const discountPrice = (totalPrice * coupon) / 100;
  const shippingTotol = totalPrice + 16;
  return (
    <div>
      {data.map((item) => (
        <div className="card">
          {/* Mahsulot rasmi va nomi */}
          <div className="card__info">
            <img className="card__image" src={item.main_image} alt="image" />
            <div>
              <h3 className="card__title">{item.title}</h3>
              <p className="card__desc">{item._id}</p>
            </div>
          </div>

          {/* Narx */}
          <div className="card_count">(x{item.count})</div>
          {/* Umumiy narx */}
          <div className="card__total">{item.userPrice}</div>
        </div>
      ))}

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
            <h2 className="summary-discount">
              {discountPrice.toFixed(2) || 0}
            </h2>
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
              <h1 className={`${Boolean(coupon) && "line-through"}`}>
                {shippingTotol?.toFixed(2)}
              </h1>
            </div>
          </div>
          <h1 className={`${coupon && "line-through"}`}>
            {shippingTotol.toFixed(2)}
          </h1>
          {coupon && (
            <h1 className="discounted-total">
              {(shippingTotol - discountPrice).toFixed(2)}
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Total;

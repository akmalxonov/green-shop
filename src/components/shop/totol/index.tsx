import React, { useRef } from "react";
import "../totol/totol.scss";
import Prices from "./prices";
import { Form } from "antd";
import { useGetCoupon } from "../../../hooks/useQuery/useQueryAction";
import { Loader } from "lucide-react";

const ShopTotal: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { mutate, isPending } = useGetCoupon();

  const getCoupon = () => {
    const value = inputRef.current?.value;
    if (!value || value.trim() === "") return;
    mutate(value.trim());
  };

  return (
    <div className="shopping-cart">
      {/* Cart Total */}
      <div className="cart-total-section">
        <h3 className="cart-total-title">Cart Total</h3>

        {/* Coupon Form */}
        <Form onFinish={getCoupon} className="coupon-form">
          <input
            ref={inputRef}
            type="text"
            name="coupon"
            placeholder="Enter coupon code here..."
            className="coupon-input"
          />
          <button type="submit" className="apply-btn">
            {isPending ? (
              <Loader className="loader-active" />
            ) : (
              <span>Apply</span>
            )}
          </button>
        </Form>

        {/* Prices */}
        <Prices />

        {/* Checkout Button */}
        <div className="prices-section">
          <button className="proceed-btn">Proceed To Checkout</button>
        </div>

        {/* Continue Shopping */}
        <div className="continue-shopping">
          <button className="continue-btn">Continue Shopping</button>
        </div>
      </div>
    </div>
  );
};

export default ShopTotal;
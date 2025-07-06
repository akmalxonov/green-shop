import { Modal } from "antd";
import { useDispatch } from "react-redux";
import { useReduxSelector } from "../../../../hooks/useRedux";
import { setOpenOrderModal } from "../../../../redux/modal-slice";
import { useNavigate } from "react-router-dom";
const OrderModal = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { openOrderModal } = useReduxSelector((state) => state.modalSlice);
  const { data = [], coupon = 0 } = useReduxSelector(
    (state) => state.cardSlice || {}
  );
  console.log("data", data);
  console.log("coupon", coupon);
  const totalPrice = data.reduce((acc, value) => (acc += value.userPrice), 0);
  const shippingTotol = totalPrice + 16;
  return (
    <div className="order">
      <Modal
        open={openOrderModal}
        footer={false}
        onCancel={() => dispatch(setOpenOrderModal(false))}
        width={700}
      >
        <h3>Order Confirmation</h3>
        <div
          className="list"
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "space-between",
            padding: "10px",
            marginTop: "20px",
            marginBottom: "30px",
          }}
        >
          <span
            className="item"
            style={{
              minWidth: "120px",
              borderRight: "1px solid #ccc",
              paddingRight: "20px",
            }}
          >
            <p>Order Number</p>
            <h4>1751744123449</h4>
          </span>
          <span
            className="item"
            style={{
              borderRight: "1px solid #ccc",
              paddingRight: "20px",
            }}
          >
            <p>Data</p>
            <h4>Sun Jul 06 2025</h4>
          </span>

          <span
            className="item"
            style={{
              borderRight: "1px solid #ccc",
              paddingRight: "20px",
            }}
          >
            <p>Total</p>
            <h4>{totalPrice}</h4>
          </span>
          <span
            className="item"
            style={{
              paddingRight: "20px",
            }}
          >
            <p>Payment Method</p>
            <h4>Cash on delivery</h4>
          </span>
        </div>
        <div className="center">
          <h3>Order Details</h3>

          {data.map((item) => (
            <div className="card">
              {/* Mahsulot rasmi va nomi */}
              <div className="card__info">
                <img
                  className="card__image"
                  src={item.main_image}
                  alt="image"
                />
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
        </div>
        <ul className="bottom " style={{borderBottom:"1px solid green"}}>
          <li
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <p>Shipping</p>
            <h3>{shippingTotol}</h3>
          </li>
          <li style={{ display: "flex", justifyContent: "space-between" }}>
            <p>Total</p>
            <h3>{totalPrice}</h3>
          </li>
        </ul>
        <p style={{textAlign:"center", marginTop:"20px"}}>
          Your order is currently being processed. You will receive an order <br />
          confirmation email shortly with the expected delivery date for your <br />
          items.
        </p>
        <button onClick={()=>{
          navigate("/profil/track-order")
          dispatch(setOpenOrderModal(false))
        }} className="btn" style={{display:"flex",justifyContent:"center",margin:"auto" ,marginTop:"40px"}}>
          Track You Order
        </button>
      </Modal>
    </div>
  );
};

export default OrderModal;

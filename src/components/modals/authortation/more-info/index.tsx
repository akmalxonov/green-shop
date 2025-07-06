import { Button, Modal } from "antd";
import { useDispatch } from "react-redux";
import { useReduxSelector } from "../../../../hooks/useRedux";
import { setOpenMoreInfoModal } from "../../../../redux/modal-slice";
import type { DataType, idType, OrderType } from "../../../../@types";
import { useQueryHandler } from "../../../../hooks/useQuery";
import { useOrderDeleteMutation } from "../../../../hooks/useQuery/useQueryAction";
const MoreInfoModal = () => {
  const { data: allOrders }: DataType<OrderType[]> = useQueryHandler<
    OrderType[]
  >({
    pathname: "categories",
    url: "api/order/get-order",
  });
  console.log(allOrders);
  const { openMoreInfoModal: selectedOrderId } = useReduxSelector(
    (state) => state.modalSlice
  );

  const selectedOrder = allOrders?.find(
    (order) => order._id === selectedOrderId
  );
  const id:idType={
  _id:selectedOrder!._id
}

  const dispatch = useDispatch();
   const { mutate } = useOrderDeleteMutation();
  return (
    <div className="order">
      <Modal
        open={!!selectedOrderId}
        onCancel={() => dispatch(setOpenMoreInfoModal(false))}
        width={700}
        footer={[
          <Button
            key="back"
            onClick={() => dispatch(setOpenMoreInfoModal(false))}
          >
            Close
          </Button>,
          <Button
            key="submit"
            color="danger"
            variant="outlined"

            onClick={() => {
                dispatch(setOpenMoreInfoModal(false))
                mutate(id);
            }}
          >
            Delete
          </Button>,
        ]}
      >
        <h3>Order Confirmation</h3>
        {selectedOrder && (
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
              <h4>{selectedOrder._id}</h4>
            </span>
            <span
              className="item"
              style={{
                borderRight: "1px solid #ccc",
                paddingRight: "20px",
              }}
            >
              <p>Data</p>
              <h4>{new Date(selectedOrder.created_at).toLocaleDateString()}</h4>
            </span>

            <span
              className="item"
              style={{
                borderRight: "1px solid #ccc",
                paddingRight: "20px",
              }}
            >
              <p>Total</p>
              <h4>{selectedOrder.extra_shop_info.total.toFixed(2)}</h4>
            </span>
            <span
              className="item"
              style={{
                paddingRight: "20px",
              }}
            >
              <p>Payment Method</p>
              <h4>{selectedOrder.extra_shop_info.method}</h4>
            </span>
          </div>
        )}
        <div className="center">
          <h3>Order Details</h3>

          {selectedOrder?.shop_list.map((value: OrderType["shop_list"][0]) => (
            <div className="card">
              {/* Mahsulot rasmi va nomi */}
              <div className="card__info">
                <img
                  className="card__image"
                  src={value.main_image}
                  alt="image"
                />
                <div>
                  <h3 className="card__title">{value.title}</h3>
                  <p className="card__desc">{value.category}</p>
                </div>
              </div>

              {/* Narx */}
              <div className="card_count">(x{value.counter})</div>
              {/* Umumiy narx */}
              <div className="card__total">{value.userPrice}</div>
            </div>
          ))}
        </div>
        {selectedOrder && (
          <ul className="bottom " style={{ borderBottom: "1px solid green" }}>
            <li
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              <p>Shipping</p>
              <h3>$16.00</h3>
            </li>
            <li style={{ display: "flex", justifyContent: "space-between" }}>
              <p>Total</p>
              <h3>${selectedOrder.extra_shop_info.total.toFixed(2)}</h3>
            </li>
          </ul>
        )}
      </Modal>
    </div>
  );
};

export default MoreInfoModal;

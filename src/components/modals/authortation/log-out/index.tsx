import { Modal } from "antd";
import { useDispatch } from "react-redux";
import { setOpenLogOutModal } from "../../../../redux/modal-slice";
import { useReduxSelector } from "../../../../hooks/useRedux";
import "../log-out/logout.scss";
import { useNavigate } from "react-router-dom";

const LogOutModal = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { openLogOutModal } = useReduxSelector((state) => state.modalSlice);
  return (
    <div className="logout">
      <Modal
        open={openLogOutModal}
        footer={false}
        onCancel={() => dispatch(setOpenLogOutModal(false))}
      >
        <div className="wrapper">
          <h2>Log out</h2>
          <p>Are you sure you want to log out?</p>
          <button
            className="btn"
            onClick={() => {
              localStorage.removeItem("user");
              localStorage.removeItem("token");
              dispatch(setOpenLogOutModal(false));
              navigate("/")
            }}
          >
            Yes,Log Out
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default LogOutModal;

import { Modal } from "antd";
import { useReduxSelector } from "../../../../hooks/useRedux";
import { useDispatch } from "react-redux";
import { setOpenLogOutModal } from "../../../../redux/modal-slice";


const LogOutModal = () => {
  const dispatch = useDispatch();
  const { openLogOutModal } = useReduxSelector((state) => state.modalSlice);
  return (
    <div>
      <Modal
        open={openLogOutModal}
        footer={false}
        onCancel={() => dispatch(setOpenLogOutModal(false))}
      >
        <div className="wrapper">
          <button
            className="btn"
            onClick={() => {
              dispatch(setOpenLogOutModal(false));
            }}
          >
            Log Out
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default LogOutModal;

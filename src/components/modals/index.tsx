import { useReduxSelector } from "../../hooks/useRedux";
import AuthorizationModal from "./authortation";
import OrderModal from "./authortation/confirmation";
import LogOutModal from "./authortation/log-out";
import MoreInfoModal from "./authortation/more-info";


const Modals = () => {
  const { openAuthorizationModal, openLogOutModal, openOrderModal,openMoreInfoModal } = useReduxSelector(
    (state) => state.modalSlice
  );

  return (
    <>
      {openAuthorizationModal && <AuthorizationModal />}
      {openLogOutModal && <LogOutModal />}
      {openOrderModal && <OrderModal />}
      {openMoreInfoModal && <MoreInfoModal/>}
    </>
  );
};

export default Modals;
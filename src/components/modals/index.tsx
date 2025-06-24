import { useReduxSelector } from "../../hooks/useRedux";
import AuthorizationModal from "./authortation";
import LogOutModal from "./authortation/log-out";

const Modals = () => {
  const { openAuthorizationModal, openLogOutModal } = useReduxSelector(
    (state) => state.modalSlice
  );

  return (
    <>
      {openAuthorizationModal && <AuthorizationModal />}
      {openLogOutModal && <LogOutModal />}
    </>
  );
};

export default Modals;

import { useReduxSelector } from '../../hooks/useRedux';
import AuthorizationModal from './authortation';

const Modals = () => {
    const {openAuthorizationModal} = useReduxSelector((state)=>state.modalSlice)

    return (
        <>
           {openAuthorizationModal && <AuthorizationModal/>} 
        </>
    );
}

export default Modals;

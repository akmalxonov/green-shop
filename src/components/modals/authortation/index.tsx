import { Modal } from "antd"
import { useReduxSelector } from "../../../hooks/useRedux"
import { useDispatch } from "react-redux"
import { setOpenAuthorizationModal } from "../../../redux/modal-slice"
import "../authortation/AuthorizationModal.scss"
import Login from "./login"
import Register from "./register"
import { useState } from "react"
const AuthorizationModal = () =>{

    const dispatch = useDispatch()
    const {openAuthorizationModal} = useReduxSelector((state)=>state.modalSlice)
    const [editPage,setEditPge] = useState("login")

    return <Modal open={openAuthorizationModal} footer={false} onCancel={()=>dispatch(setOpenAuthorizationModal())}>
        <div className="modal-wrapper">
            <div className="top">
            <h3 className={`tab ${editPage == "login" ? "active" : ""}`} onClick={()=>setEditPge("login")}>Login</h3>
            <h3>|</h3>
            <h3 className={`tab ${editPage !== "login" ? "active" : ""}`} onClick={()=>setEditPge("register")}>Register</h3>
        </div>
        {
            editPage === "login" ? <Login/>:<Register/>
        }
        </div>
    </Modal>
}

export default AuthorizationModal
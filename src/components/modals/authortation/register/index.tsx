import { Form, Input } from "antd";
import "../login/login.scss"
import { useRegisterMutation, useRegisterWithGoogleMutation } from "../../../../hooks/useQuery/useQueryAction";
import { Loader } from "lucide-react";
import "../register/regiter.scss"
import { notificationApi } from "../../../../generic/notificationApi";
import { FcGoogle } from "react-icons/fc";
const Register = () => {
    const {mutate,isPending} = useRegisterMutation()
    const notify = notificationApi()
    const register =(e:{email:string,password:string,name:string,surname:string,confirm_password:string})=>{
        if(e.password !== e.confirm_password){
            return notify("wrong_confirm_password")
        }
        mutate(e)
         return notify("register_sucsses")  
    }
    const {mutate:mutateGoogle} = useRegisterWithGoogleMutation()
    return (
        <div className="register">
            <p>Enter your email and password to register.</p>
            <Form onFinish={register}>
                <Form.Item name={"name"} rules={[{required:true,message:"Ismingizni kiriting"}]} >
                    <Input placeholder="Name"/>
                </Form.Item>
                <Form.Item name={"surname"} rules={[{required:true,message:"familyangizni kiriting"}]} >
                    <Input placeholder="Surname"/>
                </Form.Item>
                <Form.Item name={"email"} rules={[{required:true,message:"Emailingizni kiriting"}]} >
                    <Input placeholder="Email"/>
                </Form.Item>
                <Form.Item name={"password"} rules={[{required:true,message:"parolingizni kiriting"}]} >
                    <Input.Password placeholder="**********"/>
                </Form.Item>
                <Form.Item name={"confirm_password"} rules={[{required:true,message:"parolingizni qayta kiriting"}]} >
                    <Input.Password placeholder="**********"/>
                </Form.Item>
                <button className="btn">{isPending? <Loader className="animate-spin"/>:"Register"}</button>
            </Form>
            <h6>Or register with</h6>
            <button onClick={()=>mutateGoogle()} className="btn-google"> <FcGoogle className="icon"/>Register with Google</button>
        </div>
    );
}

export default Register;

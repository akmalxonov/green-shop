import { Form, Input } from "antd";
import "../login/login.scss"
import { useLoginMutation, useRegisterWithGoogleMutation } from "../../../../hooks/useQuery/useQueryAction";
import { Loader } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
const Login = () => {
    const {mutate,isPending} = useLoginMutation()
    const login =(e:{email:string,password:string})=>{
        mutate(e)
    }
        const {mutate:mutateGoogle} = useRegisterWithGoogleMutation()

    return (
        <div className="login">
            <p>Enter your username and password to login.</p>
            <Form onFinish={login}>
                <Form.Item name={"email"} rules={[{required:true,message:"email kirit"}]} >
                    <Input placeholder="almamun_uxui@outlook.com"/>
                </Form.Item>
                <Form.Item name={"password"} rules={[{required:true,message:"parol kirit"}]} >
                    <Input.Password placeholder="**********"/>
                </Form.Item>
                <a href="#">Forgot Password?</a>
                <button className="btn">{isPending? <Loader className="animate-spin"/>:"Login"}</button>
            </Form>
            <h6>Or login with</h6>
            <button onClick={()=>mutateGoogle()} className="btn-google"><FcGoogle className="icon"/> Login with Google</button>
        </div>
    );
}

export default Login;

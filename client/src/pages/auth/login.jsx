import { Link } from "react-router-dom";
import CommonForm from "@/components/common/form";
import { useState } from "react";
import { loginFormControls } from "@/config";
import { useDispatch } from "react-redux";
import { loginUser } from "@/store/auth-slice";

const initialState = {
    email: "",
    password: "",
};
function AuthLogin(){
    const dispatch = useDispatch()
    function onSubmit(event){
        event.preventDefault();
        dispatch(loginUser(formData)).then((data)=>{
            console.log(data);
        })
    }

    const [formData, setFormData] = useState(initialState);
    return ( 
        <div className="mx-auto w-full max-w-md space-y-6">
            <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-foreground">
                Sign in your account
            </h1>
            <p className="mt-2">
                dont have an account
                <Link className="font-medium ml-2 text-primary hover:underline"
                to="/auth/register">
                Register
                </Link>
            </p>
            </div>
            <CommonForm
        formControls={loginFormControls}
        buttonText={"Sign In"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}/>
        </div>
    )
}

export default AuthLogin;
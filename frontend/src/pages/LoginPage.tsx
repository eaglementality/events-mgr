import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Users } from "../data";
import RootLayout from "./MainLayout";
import { AxiosPost } from "../Components/crud";
import Form from "../Components/Layouts/Form";
import FormContainer from "../Components/Layouts/FormContainer";

interface signUpProps {
  email: string;
  password: string;
  alertWarning?: string;
}

function LoginPage() {
  const navigate = useNavigate();
  const [states, setStates] = useState<signUpProps>({
    email: "",
    password: "",
    alertWarning: "",
  });

  const formData = [
    {
      id: 0,
      name: "email",
      type: "text",
      placeholder: "Enter your email",
      title: "Email", 
      setInputState: (value: any) => setStates({ ...states, email: value }),
      defaultValue: states.email,
    },
    {
      id: 1,
      name: "password",
      type: "password",
      placeholder: "Enter your password",
      title: "Password", 
      setInputState: (value: any) => setStates({ ...states, password: value }),
      defaultValue: states.password,
    }
  ]

  const updateStates = (key: string, value: any) => {
    setStates({
      ...states,
      [key]: value,
    });
  };

  useEffect(() => {
    const user = sessionStorage.getItem("user");
    if (user) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const submit = async () => {
    try { 
    const res = await AxiosPost("login", {
      email: states.email,
      password: states.password,
    }); 
    if(res.isSuccess) {
      sessionStorage.setItem("user", JSON.stringify(res.data));
      navigate("/dashboard");
    }else{
      throw new Error(res.message);
    }
    }catch (error : any) {
      updateStates(`alertWarning`, "Invalid email or password")
      console.error(error);
    }
  };
 

  const validateFields = () => {
    states.email.length < 5
      ? updateStates(`alertWarning`, `Email must be at least 5 characters`)
      : states.password.length < 8
      ? updateStates(`alertWarning`, `Password must be at least 8 characters`)
      : submit();
  };

  return (
    <RootLayout>
     <FormContainer>
          <h1 className="font-bold">Login</h1>  
          {states.alertWarning?.length !== 0 &&
          <div className="bg-red-400 mt-1 text-sm text-white rounded-sm px-1 py-2">{states.alertWarning}</div>}
          <Form btnTitle="Login" buttonHandler={validateFields} formData={formData}/> 
          <div className="text-gray-400 text-sm mt-2">
            Don't have an account? <Link to="/register">Sign up</Link>
            <div className="mt-2">
            <Link to="/reset-password">Forgot password?</Link>
            </div>
          </div>
        </FormContainer>
    </RootLayout>
  );
}

export default LoginPage;

import React from "react";
import LoginForm from './LoginForm'

function Login (props) {
    return (
    <div className=" flex flex-col flex_nowrap justify-center h-full w-full content-center text-center  bg-green-light">
        <LoginForm handleLogin={props.handleLogin}/>
    </div>
    )}
export default Login;

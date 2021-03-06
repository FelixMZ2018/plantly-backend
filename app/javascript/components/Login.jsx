import React from "react";
import LoginForm from './LoginForm'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            method: "login"
        };
      }


  render() {
    function changeMethod(method) {
        
    }
    return (
    <div className=" flex flex-col flex_nowrap justify-center h-max w-max content-center text-center  bg-green-light">
        <LoginForm/>
    </div>
    )}
}
export default Login;

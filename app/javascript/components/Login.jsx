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
    return (
    <div className=" flex flex-col flex_nowrap justify-center h-screen w-screen content-center text-center items-center bg-green-light">
        <LoginForm/>
    </div>
    )}
}
export default Login;

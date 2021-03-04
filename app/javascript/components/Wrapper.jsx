import React from "react";
import LoginForm from './LoginForm'
import App from '../index'

class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      isloggedin: false,
      userID: null,
      token: null
    };
  }

  render() {
    let {isloggedin} = this.state.isloggedin

    const renderAuth =() => {
       if(isloggedin) {
        return <App></App>
      } else {
        return <LoginForm></LoginForm>

      }
    }
    return(
      <div className="Wrapper">
        {renderAuth()}
      </div>
    )
  }
}

export default Wrapper;

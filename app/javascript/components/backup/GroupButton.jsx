import React from "react";
import { connect } from "react-redux";
import { triggerModal } from "../actions";


class GroupButton extends React.Component {
  render() {
    return (
      <button onClick={() => this.props.triggerModal({id: this.props.id ,type: this.props.type ,action: this.props.action,isShown: true,group_id: this.props.group_id})}>{this.props.message}</button>
      );
  }
}
export default connect(null, { triggerModal })(GroupButton);

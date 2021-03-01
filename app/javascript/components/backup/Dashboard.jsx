import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import GroupCard from "./GroupCard";
import PlantCard from "./PlantCard";
import GroupButton from "./GroupButton";
import { DashboardApiCallAction } from "../actions";
import Modal from "./Modal";
import { triggerModal } from "../actions";


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: [],
    };
  }

  componentDidMount() {
    this.props.DashboardApiCallAction();
  }

  render() {
    return (
      <div className="Container">
        <Modal
        isShown={this.props.modal.isShown}
        type={this.props.modal.type}
        action={this.props.modal.action}
        id={this.props.modal.id}
        modalContent={this.props.modal.modalContent}
        group_id={this.props.modal.group_id}
        />
        <h1>Sturdy Pancake</h1>
        {this.props.reduxGroups.map((group) => (
          <GroupCard
            id={group.id}
            key={group.id}
            name={group.name}
            battery_level={group.battery_level}
            plants={group.plants}
            timestamp={group.timestamp}
            modal_call={this.props}
          />
        ))}
          <GroupButton
          id={null}
          message={"Add Group"}
          action={"new"}
          type={"group"}
          />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return { reduxGroups: state.reduxGroups, modal: state.modal };
};

export default connect(mapStateToProps, { DashboardApiCallAction,triggerModal })(Dashboard);

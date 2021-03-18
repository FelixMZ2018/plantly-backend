import React from "react";
import PlantCardWrapper from "../Plants/PlantCardWrapper";
import Button from "../General/Button";
import GroupCardSensorBar from '../Sensors/GroupCardSensorBar'
import { Link } from "react-router-dom";

class GroupCard extends React.Component {
  render() {
    return (
      <div className="GroupCard  bg-green-light p-2">
        <h3>{this.props.group.name}</h3>
        <GroupCardSensorBar sensors={this.props.group.group_sensors}/>
        <PlantCardWrapper plants={this.props.group.plants}></PlantCardWrapper>
        <Link
          to={{
            pathname: "/plant/new",
            state: { group_id: this.props.group.id },
          }}
        > <div className="flex justify-end pt-2">
          <Button text="Add a Plant" />
          </div>
        </Link>
      </div>
    );
  }
}

export default GroupCard;

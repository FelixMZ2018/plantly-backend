import React from "react";
import PlantCardWrapper from "../Plants/PlantCardWrapper";
import Button from "../General/Button";
import GroupCardSensorBar from "../Sensors/GroupCardSensorBar";
import { Link } from "react-router-dom";
import relativeTime from "../Utilities/relativeTime";

class GroupCard extends React.Component {
  render() {
    const timestamp = relativeTime(this.props.group.timestamp);
    return (
      <div className="GroupCard  bg-green-light">
        <div className="flex justify-between pt-5">
          <h1 className="text-green-dark ml-5 mb-2 inline text-xl">
            {this.props.group.name}
          </h1>
          <div className="timestamp text-right mr-5 text-green-dark inline">
            last seen: {timestamp}
          </div>
        </div>

        <GroupCardSensorBar sensors={this.props.group.group_sensors} />
        <PlantCardWrapper plants={this.props.group.plants}></PlantCardWrapper>
        <Link
          to={{
            pathname: "/plant/new",
            state: { group_id: this.props.group.id },
          }}
        >
          {" "}
          <div className="flex justify-end pt-2">
            <Button text="Add a Plant" />
          </div>
        </Link>
        <Link
          to={{
            pathname: `/group/${this.props.group.id}`,
          }}
        >
          {" "}
          <div className="flex justify-end pt-2">
            <Button text="View the Group" />
          </div>
        </Link>
      </div>
    );
  }
}

export default GroupCard;

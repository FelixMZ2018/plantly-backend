import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Moment from 'react-moment';
import PlantCard from "./PlantCard";
import GroupButton from "./GroupButton";
import { triggerModal } from "../actions";


class GroupCard extends React.Component {
  render() {
    return (
      <div className="Group-Card">
        <h2>{this.props.name}</h2>
        <div className="Indicators">
          <Moment fromNow>{this.props.timestamp}</Moment>
          <br></br>
          {Math.trunc(this.props.battery_level)} %{" "}
        </div>
        <GroupButton
          id={null}
          message={"Edit Group"}
          action={"edit"}
          type={"group"}
          />
        <Grid container spacing={3}>
          {this.props.plants.map((plant) => (
            <PlantCard
              key={plant.id}
              name={plant.name}
              sensors={plant.sensors}
              image_url={plant.image_url}
              id={plant.id}
            />
          ))}
          <GroupButton
          id={null}
          message={"Add Plant"}
          action={"new"}
          type={"plant"}
          group_id={this.props.id}
          />
        </Grid>
      </div>
    );
  }
}
export default GroupCard;

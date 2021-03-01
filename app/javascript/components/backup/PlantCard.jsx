import React from "react";
import { Link } from "react-router-dom";
import SensorCard from "./SensorCard";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import { triggerModal } from "../actions";

class PlantCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      PlantCardStyle: {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${this.props.image_url})`,
      },
      PlantCardClasses: ["Plant-Card", "flex-item"].join(" "),
    };
  }

  render() {
    return (
      <Grid item xs={6} sm={3}>
        <div onClick={() => this.props.triggerModal({id: this.props.id,type: "plant",action: "view",isShown: true,modalContent: null})}>
          <div
            key={this.props.id}
            className={this.state.PlantCardClasses}
            style={this.state.PlantCardStyle}
          >
            <div className="Plant-Card-Title">
              <h2>{this.props.name}</h2>
            </div>
          </div>
          {this.props.sensors.map((sensor) => (
            <SensorCard sensor={sensor}></SensorCard>
          ))}
        </div>
      </Grid>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    plant: state.plant,
  };
};

export default connect(mapStateToProps, { triggerModal })(PlantCard);

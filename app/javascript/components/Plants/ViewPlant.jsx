import React, { Component } from "react";
import { useParams, withRouter, useHistory } from "react-router-dom";
import { axiosInstance } from "../../clients/axiosInstance";
import PlantViewSensorCard from "../Sensors/PlantViewSensorCard";

class ViewPlant extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this)
    this.state = {
      error: null,
      isLoaded: false,
      plant: { name: null, detailed_sensor: [] },
      jwt: this.props.jwt,
      id: this.props.match.params.id,
    };
  }


  handleDelete(props) {
     axiosInstance
      .delete(`/plants/delete/${this.state.id}`, {
        headers: { Authorization: `Bearer ${this.state.jwt}` },
      })
      .then(function (response) {
        if (response.status === 200) {
          const history = useHistory();
          history.push("/")();
        }
      });
  }

  componentDidMount(props) {
    axiosInstance.get(`/plants/${this.state.id}`, {
        headers: { Authorization: `Bearer ${this.state.jwt}` },
      })
      .then((res) => {
        const groups = res.data;
        this.setState({
          isLoaded: true,
          plant: res.data,
        });
      });
  }
  render() {
    return (
      <div className=" bg-green-light flex-grow">
        Name: {this.state.plant.name}
        Sensors:{" "}
        {this.state.plant.detailed_sensor.map(function (sensor, index) {
          return (
            <PlantViewSensorCard
              sensor={sensor}
              key={index}
            ></PlantViewSensorCard>
          );
        })}
        <button onClick={this.handleDelete}>DELETE</button>
        <img src={this.state.plant.image_url}></img>
      </div>
    );
  }
}

export default withRouter(ViewPlant);

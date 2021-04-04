import React, { Component } from "react";
import { useParams, withRouter, useHistory } from "react-router-dom";
import { axiosInstance } from "../../clients/axiosInstance";
import PlantViewSensorCard from "../Sensors/PlantViewSensorCard";
import Button from "../General/Button";
import ConfirmationModal from "../General/ConfirmationModal";

class ViewPlant extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.state = {
      error: null,
      isLoaded: false,
      plant: { name: null, detailed_sensor: [] },
      modal: false,
      jwt: this.props.jwt,
      id: this.props.match.params.id,
    };
  }

  handleDelete(props) {
    const { history } = this.props;
    axiosInstance
      .delete(`/plants/delete/${this.state.id}`, {
        headers: { Authorization: `Bearer ${this.state.jwt}` },
      })
      .then(function (response) {
        if (response.status === 200) {
          history.push("/")();
        }
      });
  }

  showDeleteModal(props) {
    if (this.state.modal) {
      return (
        <ConfirmationModal
          text={"Are you sure you want to delete this plant"}
          function={this.handleDelete}
        />
      );
    }
  }
  openDeleteModal(props) {
    this.setState({
      modal: true,
    });
  }

  image(props){
    if (!(this.state.plant.image_url === false)) {
      <img src={this.state.plant.image_url}></img> 
    }
  }

  componentDidMount(props) {
    axiosInstance
      .get(`/plants/${this.state.id}`, {
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
        <div className="flex">
          <div className="flex-1">
            {this.showDeleteModal()}
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
          </div>
          <div className="flex-1">
            {this.image}
          </div>
        </div>
        <div
          onClick={() => this.setState({ modal: true })}
          className="flex justify-end pt-2"
        >
          <Button text="Delete this Plant" />
        </div>
      </div>
    );
  }
}

export default withRouter(ViewPlant);

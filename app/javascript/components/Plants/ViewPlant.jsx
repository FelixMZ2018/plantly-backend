import React, { Component } from 'react'
import { useParams,withRouter } from "react-router-dom";
import { axiosInstance } from "../../clients/axiosInstance";
import PlantViewSensorCard from "../Sensors/PlantViewSensorCard";


class ViewPlant extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      plant: {name: null,detailed_sensor: []},
    }
    }

  componentDidMount() {
    const id = this.props.match.params.id;
      axiosInstance.get(`/plants/${id}`,
      { headers: {"Authorization" : `Bearer ${this.props.jwt}`} })
        .then(res => {
          const groups = res.data;
          this.setState({
            isLoaded: true,
            plant: res.data,
          })
        });
    }
  render() {
    return (
      <div className=" bg-green-light flex-grow">
        Name: {this.state.plant.name}
        Sensors: {this.state.plant.detailed_sensor.map(function(sensor,index){
          return <PlantViewSensorCard sensor={sensor}  key={index}>
          </PlantViewSensorCard>
        })}
        <img src={this.state.plant.image_url}></img>
      </div>
    )
  }
}

export default withRouter(ViewPlant)

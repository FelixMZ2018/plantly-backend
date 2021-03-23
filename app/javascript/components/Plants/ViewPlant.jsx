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
      jwt: this.props.jwt,
      id: this.props.match.params.id
    }
    }
  componentDidMount(props) {
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
    function delete_plant(props) {
      axiosInstance.delete(`/plants/delete/${props.id}`,
      { headers: {"Authorization" : `Bearer ${props.jwt}`} })
        }

    return (
      <div className=" bg-green-light flex-grow">
        Name: {this.state.plant.name}
        Sensors: {this.state.plant.detailed_sensor.map(function(sensor,index){
          return <PlantViewSensorCard sensor={sensor}  key={index}>
          </PlantViewSensorCard>
        })}
        <button onClick={delete_plant}>DELETE</button>
        <img src={this.state.plant.image_url}></img>
      </div>
    )
  }
}

export default withRouter(ViewPlant)

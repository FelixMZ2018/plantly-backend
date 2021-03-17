import React, { Component } from 'react'
import { useParams } from "react-router-dom";
import { axiosInstance } from "../../clients/axiosInstance";
import PlantViewSensorCard from "../Sensors/PlantViewSensorCard";


class ViewPlant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      plant: {}};
    }

  componentDidMount() {
      axiosInstance.get(`/plants/${this.props.id}`,
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
      <div>
        TEST
      </div>
    )
  }
}

export default ViewPlant

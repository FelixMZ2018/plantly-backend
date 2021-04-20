import React from "react";
import SensorName from "../Utilities/SensorName.js";

export default function PlantViewSensorCard(props) {
  const sensor_string = SensorName(props.sensor.sensor_type);

  return <div>This is a {sensor_string} Sensor </div>;
}

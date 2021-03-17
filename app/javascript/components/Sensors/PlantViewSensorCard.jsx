import React from "react";

export default function PlantViewSensorCard(props) {
  function Sensor_type(params) {
    switch (params) {
      case "soil_moisture":
        return "Soil Moisture";
        break;
    }
  }
  return <div>This is a {Sensor_type(props.sensor.sensor_type)} Sensor </div>;
}

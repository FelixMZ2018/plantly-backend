import React from "react";

export default function PlantViewSensorCard() {
  function Sensor_type(params) {
    switch (params) {
      case "soil_moisture":
        return "Soil Moisture";
        break;
    }
  }
  return <div>This is a sensor{Sensor_type(this.props.sensor.sensor_type)}</div>;
}

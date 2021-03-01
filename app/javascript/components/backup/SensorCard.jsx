import React from "react";
import { Link } from "react-router-dom";

function normalizedSensorValue() {
  var [value, low, high] = [arguments[0], arguments[1], arguments[2]];
  if (low < high) {
    return value / (high - low);
  } else if (high < low) {
    return value / (high + low);
  } else {
    return "Something went wrong ";
  }
}

function sensorIcon(SensorType) {
  if ((SensorType = "Soil Moisture")) {
    return "Soil Moisture : ";
  }
}
class SensorCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.sensor.last_datapoint === null) {
      return <div className="Sensor-Card">no Data available</div>;
    } else {
      return (
        <div className="Sensor-Card" key={this.props.id}>
          {sensorIcon(this.props.sensor_type)}
          {Math.trunc(
            normalizedSensorValue(
              this.props.sensor.last_datapoint.value,
              this.props.sensor.low_normalizing_value,
              this.props.sensor.high_normalizing_value
            ) * 100
          ) + "%"}
        </div>
      );
    }
  }
}

export default SensorCard;

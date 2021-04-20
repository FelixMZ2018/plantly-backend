import React from "react";
import SensorName from "../Utilities/SensorName";
import SensorValue from "../Utilities/SensorValue";

export default function PlantCardSensor(params) {
  const display_value = SensorValue(
    params.sensor.last_datapoint.value,
    params.sensor.calibration_high,
    params.sensor.calibration_low
  );
  const sensor_string = SensorName(params.sensor.sensor_type);
  return (
    <div className="text-textColor-darkgreen p-2">
      {sensor_string}: {display_value}%
    </div>
  );
}

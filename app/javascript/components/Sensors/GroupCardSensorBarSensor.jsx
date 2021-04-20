import React from "react";
import SensorUnits from "../Utilities/SensorUnits";
import SensorName from "../Utilities/SensorName";

export default function GroupCardSensorBarSensor(params) {
  const sensor_type = SensorName(params.sensor.sensor_type);
  const sensor_unit = SensorUnits(params.sensor.sensor_type);
  return (
    <div className="inline">
      {sensor_type}: {params.sensor.last_datapoint.value} {sensor_unit}
    </div>
  );
}

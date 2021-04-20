import React from "react";
import GroupCardSensorBarSensor from "./GroupCardSensorBarSensor";

export default function GroupCardSensorBar(params) {
  return (
    <div className="text-green-dark flex justify-between mr-5 ml-5">
      {params.sensors.map(function (sensor, index) {
        return <GroupCardSensorBarSensor sensor={sensor} key={index} />;
      })}
    </div>
  );
}

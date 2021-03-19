function sensorUnit(params) {
  switch (params) {
    case "soil_moisture":
      return "%";
      break;
    case "light":
      return "lux";
      break;
    case "humidity":
      return "%";
      break;
    case "temperature":
      return "°C";
      break;
  }
}
export default sensorUnit;

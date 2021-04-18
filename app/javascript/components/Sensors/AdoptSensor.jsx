import React from "react";
import axiosInstance from "../../clients/axiosInstance";

export default function AdoptSensor(props) {
  const [Sensors, setSensors] = useState(initialState);
  useEffect(async () => {
    axiosInstance
      .get(`adoptable/${props.group_id}`, {
        headers: { Authorization: `Bearer ${this.props.jwt}` },
      })
      .then((res) => {
        const groups = res.data;
        this.setState({
          isLoaded: true,
          groups: groups,
        });
      });

    setData(result.data);
  });
  return <div></div>;
}

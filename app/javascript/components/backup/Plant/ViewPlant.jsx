import React from "react";
import { GetPlantAction } from "../../actions";
import { connect } from "react-redux";
import axios from "axios";

function deletePlant(id) {
  const url = "api/v1/plants/delete/" + id;
  axios.delete(url, {
  })
}
class ViewPlant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      plant: {},
    };
  }


  componentDidMount() {
    const url = "api/v1/plants/show/" + this.props.id;
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            plant: result,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }
  render() {
    return (
      <div>
        <h1>Name: {this.state.plant.name}</h1>
        <h2>Type: Placeholder Text</h2>
        <button onClick={deletePlant(this.state.plant.id)} >Delete Plant</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return { plant: state.plant };
};
export default connect(mapStateToProps, { GetPlantAction })(ViewPlant);

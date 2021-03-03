import React from "react";
import GroupCard from "../components/Groups/Groupcard";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      groups: [],
    };
  }

  componentDidMount() {
    const url = "api/v1/dashboard";
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            groups: result,
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
      <div className="Dashboard p-2">
        {(this.state.isLoaded = false && <h2>Fetching Data!</h2>)}
        {this.state.groups.map((group) => (
          <GroupCard group={group}/>
        ))}
      </div>
    );
  }
}

export default Dashboard;

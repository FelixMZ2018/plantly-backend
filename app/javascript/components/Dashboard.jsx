import React from "react";
import { axiosInstance } from '../clients/axiosInstance';
import GroupCard from "../components/Groups/Groupcard";
import { useHistory, Link } from "react-router-dom";
import Button from "./General/Button";

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
    if (this.props.type === "production") {
      axiosInstance.get(`dashboard`,
      { headers: {"Authorization" : `Bearer ${this.props.jwt}`} })
        .then(res => {
          const groups = res.data;
          this.setState({
            isLoaded: true,
            groups: groups,
          })
        });
    }

  }
  render() {
    return (
      <div className="Dashboard overflow-scroll">
        {(this.state.isLoaded = false && <h2>Fetching Data!</h2>)}
        {this.state.groups.map((group) => (
          <GroupCard key={group.id} group={group}/>
        ))}
                <Link
          to={{
            pathname: "/group/new",
          }}
        >
          {" "}
          <div className="flex justify-end pt-2">
            <Button text="Add a new Group" />
          </div>
        </Link>
      </div>
    );
  }
}

export default Dashboard;

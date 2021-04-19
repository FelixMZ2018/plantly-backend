import React from "react";
import PlantCard from "./Plantcard";
import { Link } from "react-router-dom";

class PlantCardWrapper extends React.Component {
  render() {
    return (
      <div className="PlantCardWrapper grid grid-cols-4">
        {this.props.plants.map((plant) => (
          <Link key={plant.id} to={`/plants/${plant.id}`}>
            <PlantCard key={plant.id} plant={plant} />
          </Link>
        ))}
      </div>
    );
  }
}

export default PlantCardWrapper;

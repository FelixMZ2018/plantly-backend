import React from 'react'
import PlantCard from './Plantcard'

class PlantCardWrapper extends React.Component{
    render(){
        return(
            <div className="PlantCardWrapper">
            WRAPPER YO! 
            {this.props.plants.map((plant) => (
                <PlantCard plant={plant}/>
              ))}
              </div>
        )
    }
}

export default PlantCardWrapper
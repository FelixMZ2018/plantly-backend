import React from 'react'
import PlantCardWrapper from '../Plants/PlantCardWrapper'

class GroupCard extends React.Component{
    render(){
        return(
            <div className="GroupCard">
            <h3>{this.props.group.name}</h3>
            <PlantCardWrapper plants={this.props.group.plants}></PlantCardWrapper>
            </div>
        )
    }
}

export default GroupCard
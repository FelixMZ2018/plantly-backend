import React from 'react'

class Plantcard extends React.Component{
    render(){
        return(
            <div className="PlantCard cursor-pointer bg-white m-5 pb-3 rounded-xl shadow-2xl hover:shadow-none duration-300" >
                <img src={this.props.plant.image_url}/>
                <h2 className="text-textColor-darkgreen p-2">{this.props.plant.name}</h2>                
            
                
                
                </div>
        )
    }
}
export default Plantcard
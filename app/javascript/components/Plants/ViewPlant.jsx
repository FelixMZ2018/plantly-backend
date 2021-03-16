import React, { useEffect,setState,useState } from 'react'
import {useParams} from 'react-router-dom'
import {axiosInstance} from '../../clients/axiosInstance'

function ViewPlant (props) {
    const id = useParams()['id']
    const [plant,setPlant] = useState({plant: null})
    const [isLoaded,setIsLoaded] = useState({isLoaded: false})

    useEffect(async() => {
      const result = await axiosInstance.get(`/plants/${id}`,
      { headers: {"Authorization" : `Bearer ${props.jwt}`} })
      setPlant({plant: result.data})
      
      setIsLoaded({isLoaded: true})},[]);

    console.log(useParams()['id'])
        return(
            <div className="ViewPlant bg-green-light flex-grow">
              Name: {this.state.plant.name}
              </div>
        )
}
export default ViewPlant
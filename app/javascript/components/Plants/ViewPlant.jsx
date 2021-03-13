import React, { useEffect,setState } from 'react'
import {useParams} from 'react-router-dom'
import {axiosInstance} from '../../clients/axiosInstance'

function ViewPlant (props) {
    console.log(props)
    const id = useParams()['id']
    const jwt = props.jwt

    function getPlant() {
        axiosInstance.get(`/plants/${id}`,
        { headers: {"Authorization" : `Bearer ${jwt}`} })
          .then(res => {
            const plant = res.data;
            this.setState({
              isLoaded: true,
              plant: plant,
            })
          });

    }

    useEffect(() => {
        getPlant()
      });

    console.log(useParams()['id'])
        return(
            <div className="ViewPlant bg-green-light">You looking very closely at a plant now! </div>
        )
}
export default ViewPlant
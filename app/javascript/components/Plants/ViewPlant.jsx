import React from 'react'
import {useParams} from 'react-router-dom'

function ViewPlant () {
    console.log(useParams())
        return(
            <div className="ViewPlant bg-green-light">You looking very closely at a plant now! </div>
        )
}
export default ViewPlant
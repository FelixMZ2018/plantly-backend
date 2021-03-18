import React from 'react'
import GroupCardSensorBarSensor from './GroupCardSensorBarSensor'




export default function GroupCardSensorBar(params) {
    return (
        <div>
                {params.sensors.map(function(sensor,index){
                return <GroupCardSensorBarSensor sensor={sensor}  key={index}/>
        })}   
                </div>
    )
}

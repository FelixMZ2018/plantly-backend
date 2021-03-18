function SensorValue(value,high,low) {
    if (high > low) {
        return Math.round((value/(high-low))*100)
    } else {
        return Math.round((value/(high-low))*100)
    }
}

export default SensorValue
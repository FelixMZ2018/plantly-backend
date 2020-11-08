# frozen_string_literal: true

puts "Starting MQTT Connection"

Thread.new do
  MQTT::Client.connect("192.168.0.26") do |c|
    # If you pass a block to the get method, then it will loop
    c.get("Plants/#") do |topic, message|
      puts "#{topic}: #{message}"
      reading = JSON.parse(message)
      puts "Message recieved:"
      puts reading
      interpret_message(reading)
    end
  end
end

def interpret_message(reading)
  reading["sensor"].each do |dp|
    hardware_id = reading["Plant_Group"].to_s + dp["index"].to_s
    puts "Sensor: #{hardware_id} : #{dp['value']}"
    sensor = Sensor.find_by(hardware_id: hardware_id)
    sensor.nil? ? Sensor.create(hardware_id: hardware_id) : nil
    save_value(sensor, dp["value"])
  end
end

def save_value(sensor, value)
  Datapoint.create(sensor_id: sensor.id, value: value) if !sensor.group_id.nil? || !sensor.plant_id.nil?
end

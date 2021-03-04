class Datapoint < ApplicationRecord
  validates_presence_of :sensor_id
  validates_presence_of :value
  belongs_to :sensor
  belongs_to :user


  ## Format JSON and create sensor if not already existing
  def parse_reading(reading)
    reading["sensor"].each do |dp|
      hardware_id = reading["Plant_Group"].to_s + dp["index"].to_s
      puts "Sensor: #{hardware_id} : #{dp['value']}"
      sensor = Sensor.find_by(hardware_id: hardware_id)
      sensor.nil? ? sensor = Sensor.create(hardware_id: hardware_id) : nil
      update_battery_level(reading["Battery_Level"], sensor) if !sensor.group_id.nil? || !sensor.plant_id.nil?
      validate_datapoint_and_save(sensor, dp["value"]) if !sensor.group_id.nil? || !sensor.plant_id.nil?
    end
  end

  # Add Battery level indicator to Group / PlantGroup
  def update_battery_level(battery_readout, sensor)
    if sensor.group_id.nil?
      update_battery_level_to_group(battery_readout, sensor.plant.group)
    elsif sensor.plant_id.nil?
      update_battery_level_to_group(battery_readout, sensor.group)
    end
  end

  def update_battery_level_to_group(battery_level, group)
    group.battery_level = battery_level
    group.timestamp = Time.now
    group.save
  end

  def validate_datapoint_and_save(sensor, value)
    Datapoint.create(sensor_id: sensor.id, value: value)
  end
end

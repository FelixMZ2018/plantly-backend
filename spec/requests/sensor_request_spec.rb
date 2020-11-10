# frozen_string_literal: true

require "rails_helper"

RSpec.describe Sensor, type: :model do
  it "is valid with valid attributes" do
    test_sensor = Sensor.new
    test_sensor.Sensor_Type = "Humidity"
    test_sensor.group_id = 1
    test_sensor.plant_id = 1
    test_sensor.hardware_id = "Living_Room_1"
    expect(test_sensor).to be_valid
  end
  it "is valid with a Group only" do
    test_sensor = Sensor.new
    test_sensor.Sensor_Type = "Humidity"
    test_sensor.group_id = 1
    test_sensor.hardware_id = 1
    expect(test_sensor).to be_valid
  end
  it "is valid with Plant only" do
    test_sensor = Sensor.new
    test_sensor.Sensor_Type = "Humidity"
    test_sensor.plant_id = 1
    test_sensor.hardware_id = 1
    expect(test_sensor).to be_valid
  end
  it "not valid without hardware_id" do
    expect(Sensor.new).to_not be_valid
  end
end

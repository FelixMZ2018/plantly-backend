# frozen_string_literal: true

require "rails_helper"

RSpec.describe Sensor, type: :model do
  it "is valid with valid attributes" do
    test_user = User.create(username: "sample", password: "sample")
    test_group = Group.create(name: "e61eb5b8-08da-4cbc-9892-faae2769f64d", hardware_id: "Living_Room_", user_id: test_user.id)
    test_plant = Plant.create(name: "test tree",group_id: test_group.id,user_id: test_user.id)
    test_sensor = Sensor.create(
      signal_type: "digital",
      index: 1,
      hardware_id: "e61eb5b8-08da-4cbc-9892-faae2769f64d",
      user: test_user,
      group: test_group,
      sensor_type: "light",
      calibration_low: 800,
      calibration_high: 400
    )
  end
  it "is valid with a Group only" do
    test_user = User.create(username: "sample", password: "sample")
    test_group = Group.create(name: "e61eb5b8-08da-4cbc-9892-faae2769f64d", hardware_id: "Living_Room_", user_id: test_user.id)
    test_plant = Plant.create(name: "test tree",group_id: test_group.id,user_id: test_user.id)
    test_sensor = Sensor.create(
      signal_type: "digital",
      index: 1,
      hardware_id: "e61eb5b8-08da-4cbc-9892-faae2769f64d",
      user: test_user,
      group: test_group,
      sensor_type: "light",
      calibration_low: 800,
      calibration_high: 400
    )
    expect(test_sensor).to be_valid
  end
  it "is not valid with Plant only" do
    test_sensor = Sensor.new
    test_sensor.plant_id = 1
    test_sensor.hardware_id = 1
    expect(test_sensor).to_not be_valid
  end
  it "not valid without hardware_id" do
    expect(Sensor.new).to_not be_valid
  end
end

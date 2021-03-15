# frozen_string_literal: true

require "rails_helper"

test_message = JSON.parse(
  '{"Plant_Group": "Living_Room_"
  ,
  "Battery_Level":75
  ,
  "sensor": [{"index": 0,"value": 755}
  ,
  {"index": 1,"value": 603}]}'
)

puts test_message
RSpec.describe Datapoint, type: :model do
  it "is valid with valid attributes" do
    test_user = User.create(username: "sample", password: "sample")
    test_group = Group.create(name: "Living Room", hardware_id: "Living_Room_", user_id: test_user.id)
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
    expect(Datapoint.new(sensor_id: test_sensor.id, value: 2, user_id: test_user.id)).to be_valid
  end
  it "is not valid without a sensor" do
    dp_no_sensor = Datapoint.new(sensor_id: nil, value: 2)
    expect(dp_no_sensor).to_not be_valid
  end
  it "is not valid without a value" do
    dp_no_value = Datapoint.new(sensor_id: 1, value: nil)
    expect(dp_no_value).to_not be_valid
  end
  it "Should understand the Sensor Message" do
    test_user = User.create(username: "sample", password: "sample")
    test_group = Group.create(name: "Living Room", hardware_id: "e61eb5b8-08da-4cbc-9892-faae2769f64d",
                              user_id: test_user.id)
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
    Datapoint.create(sensor_id: test_sensor.id, value: 755, user_id: test_user.id)
    # expect(test_group.battery_level).to eq 75
    expect(Datapoint.count).to eq 1
    expect(Datapoint.all[0].value).to eq 755
  end
end

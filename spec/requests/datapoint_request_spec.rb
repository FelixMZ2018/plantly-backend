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
    test_group = Group.create(name: "Living Room", hardware_id: "Living_Room_")
    test_sensor = Sensor.create(group_id: test_group.id, hardware_id: "Living_Room_0")
    expect(Datapoint.new(sensor_id: test_sensor.id, value: 2)).to be_valid
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
    test_group = Group.create(name: "Living Room", hardware_id: "Living_Room_")
    Sensor.create(group_id: test_group.id, hardware_id: "Living_Room_0")
    Sensor.create(group_id: test_group.id, hardware_id: "Living_Room_1")
    Datapoint.new.parse_reading(test_message)
    # expect(test_group.battery_level).to eq 75
    expect(Datapoint.count).to eq 2
    expect(Datapoint.all[0].value).to eq 755
    expect(Datapoint.all[1].value).to eq 603
  end
end

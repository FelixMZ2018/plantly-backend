# frozen_string_literal: true

require "rails_helper"

test_message = JSON.parse(
  '{"Plant_Group": "Living_Room_"
  ,
  "sensor": [{"index": 0,"value": 755}
  ,
  {"index": 1,"value": 603},
  {"index": 2,"value": 991},
  {"index": 3,"value": 1023}]}'
)

puts test_message
RSpec.describe Datapoint, type: :model do
  it "is valid with valid attributes" do
    expect(Datapoint.new(sensor_id: 1, value: 2)).to be_valid
  end
  it "is not valid without a sensor" do
    dp_no_sensor = Datapoint.new(sensor_id: nil, value: 2)
    expect(dp_no_sensor).to_not be_valid
  end
  it "is not valid without a value" do
    dp_no_value = Datapoint.new(sensor_id: 1, value: nil)
    expect(dp_no_value).to_not be_valid
  end
  # it "Should understand the Sensor Message" do
  #   test_group = Group.new(name: "Living_Room_")
  #   test_group.save
  #   test_sensor = Sensor.create(group_id: test_group.id, hardware_id: "Living_Room_0")
  #   interpret_message(test_message)
  #   expect(Datapoint.last.value).to eq(1023)
  # end
end

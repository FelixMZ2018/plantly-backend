# frozen_string_literal: true

require "rails_helper"

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
end

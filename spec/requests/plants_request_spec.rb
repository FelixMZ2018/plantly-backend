# frozen_string_literal: true

require "rails_helper"

RSpec.describe "Plants", type: :request do
  it "is valid with a group" do
    test_user = User.create(username: "sample", password: "sample")
    test_group = Group.create(name: "Living Room", hardware_id: "Living_Room_", user_id: test_user.id)
    new_plant = Plant.new(group_id: test_group.id,user_id: test_user.id)
    expect(new_plant).to be_valid
  end
  it "is not valid without a group" do
    new_plant_no_attributes = Plant.new
    expect(new_plant_no_attributes).to_not be_valid
  end
end

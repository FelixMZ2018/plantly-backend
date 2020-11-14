# frozen_string_literal: true

require "rails_helper"

RSpec.describe "Plants", type: :request do
  it "is valid with a group" do
    gr = Group.create
    new_plant = Plant.new(group_id: gr.id)
    expect(new_plant).to be_valid
    gr.delete
  end
  it "is not valid without a group" do
    new_plant_no_attributes = Plant.new
    expect(new_plant_no_attributes).to_not be_valid
  end
end

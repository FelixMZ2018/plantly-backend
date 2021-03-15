class Group < ApplicationRecord
  validates_presence_of :name
  validates_presence_of :hardware_id
  has_many :plants
  has_many :sensors
  has_many :plant_sensors, through: :plants, source: :sensors
  belongs_to :user

  def group_sensors
    sensors.where.not(sensor_type: "soil_moisture")
  end
end

class Sensor < ApplicationRecord
  validates_presence_of :hardware_id
  validates :sensor_type, presence: true, inclusion: { in: %w[SOIL_MOISTURE TEMPERATURE HUMIDTY LIGHT],
  message: "%{value} is not a valid sensor type" }
  validates :signal_type, presence: true, inclusion: { in: %w[analog digital] }
  belongs_to :plant, optional: true
  belongs_to :group, optional: true
  has_many :datapoints
  delegate :user_id, to: :group,allow_nil: true
  delegate :user_id, to: :plant,allow_nil: true
  validates_presence_of :user_id

end

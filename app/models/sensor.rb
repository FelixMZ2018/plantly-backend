class Sensor < ApplicationRecord
  validates_presence_of :hardware_id
  belongs_to :plant, optional: true
  belongs_to :group, optional: true
  has_many :datapoints
end

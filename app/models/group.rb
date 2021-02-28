class Group < ApplicationRecord
  validates_presence_of :name
  validates_presence_of :hardware_id
  has_many :plants
  has_many :sensors
end

class Sensor < ApplicationRecord
  validates_presence_of :hardware_id
  validates :sensor_type, presence: true, inclusion: { in: %w[soil_moisture temperature humidity light],
                                                       message: "%{value} is not a valid sensor type" }
  validates :signal_type, presence: true, inclusion: { in: %w[analog digital] }
  belongs_to :plant, optional: true
  belongs_to :group, optional: true
  belongs_to :user

  has_many :datapoints
  validates_presence_of :user_id

  after_create :create_identifier
  before_validation :find_user

  def create_identifier
    self.identifier = sensor_type + index.to_s
    save
  end

  def find_user; end
end

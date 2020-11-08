class Plant < ApplicationRecord
    belongs_to :group
    has_many :sensors, class_name: "sensors", foreign_key: "sensor_id"
end

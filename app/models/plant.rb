class Plant < ApplicationRecord
  has_one_attached :image
  belongs_to :group
  has_many :sensors
  delegate :user_id, to: :group
end

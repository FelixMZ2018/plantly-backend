class User < ApplicationRecord
  has_secure_password
  has_many :groups
  has_many :plants
  has_many :sensors
end

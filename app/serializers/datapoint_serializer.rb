class DatapointSerializer < ActiveModel::Serializer
  attributes :id, :value, :updated_at
end

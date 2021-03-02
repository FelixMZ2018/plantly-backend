class GroupSerializer < ActiveModel::Serializer
  attributes \
    :id,
    :name,
    :hardware_id,
    :battery_level,
    :timestamp,
    :plants

  def plants
    ActiveModel::SerializableResource.new(object.plants, each_serializer: PlantSerializer)
  end
end

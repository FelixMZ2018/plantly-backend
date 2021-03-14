class GroupSerializer < ActiveModel::Serializer
  attributes \
    :id,
    :name,
    :hardware_id,
    :battery_level,
    :timestamp,
    :plants,
    :group_sensors

  def plants
    ActiveModel::SerializableResource.new(object.plants, each_serializer: PlantSerializer)
  end

  def group_sensors
    ActiveModel::SerializableResource.new(object.group_sensors, each_serializer: BasicSensorSerializer)
  end
end

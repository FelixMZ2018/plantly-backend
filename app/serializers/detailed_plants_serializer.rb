class DetailedPlantsSerializer < ActiveModel::Serializer
  attributes \
    :group,
    :name,
    :id,
    #    :detailed_sensor,
    :fertilizerTimestamp,
    :fertilizerInterval

  #  def detailed_sensor
  #    ActiveModel::SerializableResource.new(object.sensors, each_serializer: DetailedSensorSerializer)
  #  end
end

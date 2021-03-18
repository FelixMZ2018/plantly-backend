class DetailedPlantsSerializer < ActiveModel::Serializer
  attributes \
    :group,
    :name,
    :id,
    :detailed_sensor,
    :fertilizerTimestamp,
    :fertilizerInterval,
    :image_url

  def detailed_sensor
    ActiveModel::SerializableResource.new(object.sensors, each_serializer: DetailedSensorSerializer)
  end

  def image_url
    if object.image.attached?
      url_for(object.image)
    else
      false
    end
  end
end

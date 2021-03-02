include Rails.application.routes.url_helpers

class PlantSerializer < ActiveModel::Serializer
  attributes\
    :id,
    :name,
    :image_url,
    :fertilizerTimestamp,
    :fertilizerInterval,
    :sensors

  def sensors
    ActiveModel::SerializableResource.new(object.sensors, each_serializer: SensorSerializer)
  end

  ##  def image
  ##    return unless object.image.attached?
  ##
  ##    object.image.blob.attributes
  ##          .slice("filename", "byte_size")
  ##          .merge(url: image_url)
  ##          .tap { |attrs| attrs["name"] = attrs.delete("filename") }
  ##  end

  def image_url
    if object.image.attached?
      url_for(object.image)
    else
      false
    end
  end
end

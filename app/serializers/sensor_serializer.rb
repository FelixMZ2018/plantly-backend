class SensorSerializer < ActiveModel::Serializer
  attributes \
    :id,
    :last_datapoint,
    :sensor_type,
    :low_warning_threshold,
    :high_warning_threshold,
    :low_normalizing_value,
    :high_normalizing_value

  def last_datapoint
    return if object.datapoints.count.zero?

    ActiveModel::SerializableResource.new(object.datapoints.last, each_serializer: DatapointSerializer)
  end
end

class SensorSerializer < ActiveModel::Serializer
  attributes \
    :id,
    :last_datapoint,
    :sensor_type,
    :warning_high,
    :warning_low,
    :calibration_high,
    :calibration_low

  def last_datapoint
    #    return if object.datapoints.count.zero?

    ActiveModel::SerializableResource.new(object.datapoints.last, each_serializer: DatapointSerializer)
  end
end

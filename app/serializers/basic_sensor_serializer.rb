class BasicSensorSerializer < ActiveModel::Serializer
  attributes\
    :id,
    :sensor_type,
    :warning_high,
    :warning_low,
    :last_datapoint

    def last_datapoint
      return if object.datapoints.count.zero?
  
      ActiveModel::SerializableResource.new(object.datapoints.last, each_serializer: DatapointSerializer)
    end
end

class DetailedSensorSerializer < ActiveModel::Serializer
  attributes\
    :id,
    :sensor_type,
    :low_warning_threshold,
    :high_warning_threshold,
    :hardware_id,
    :low_normalizing_value,
    :high_normalizing_value,
    :datapoints
end

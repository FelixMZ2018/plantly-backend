class DetailedSensorSerializer < ActiveModel::Serializer
  attributes\
    :id,
    :sensor_type,
    :warning_high,
    :warning_low,
    :hardware_id,
    :calibration_high,
    :calibration_low,
    :datapoints
end

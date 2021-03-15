module Api
  module V1
    class DatapointsController < ApplicationController
      skip_before_action :require_login
      before_action :auth_sensor

      def create; end

      private

      def auth_sensor
        begin
          hardware_token = request.headers["Authorization"].split(" ")[1]
        rescue NoMethodError
          render json: { message: "Missing Authorization Header" }, status: :unauthorized
        end
        @group = Group.find_by(hardware_id: hardware_token)
        render json: { message: "No Group with the Hardware ID found" }, status: 404 if @group.nil?
        update_battery_level(params["battery_level"]) unless params["battery_level"].nil?
        update_timestamp
        params["sensors"].each { |sensor| save_datapoint(sensor) }
      end

      def create_sensor(sensor)
        Sensor.create(
          signal_type: sensor["data_type"],
          index: sensor["index"],
          hardware_id: @group.hardware_id,
          user: @group.user,
          group: @group,
          sensor_type: sensor["sensor_type"]
        )
      end

      def save_datapoint(sensor)
        id = sensor["sensor_type"] + sensor["index"].to_s
        sensor_instance = @group.sensors.find_by(identifier: id)
        sensor_instance = create_sensor(sensor) if sensor_instance.nil?
        Datapoint.create(sensor: sensor_instance, user: @group.user, value: sensor["data"])
      end

      ## TO DO MAKE ERROR MESSAGES CLEARER

      ##      def validate_sensor_object
      ##        message = []
      ##       Sensor.validators_on(:signal_type)[-1].options.values.flatten.include?(sensor["signal_type"])
      ##
      ##      end

      def update_battery_level(battery)
        @group.battery_level = battery
        @group.save
      end

      def update_timestamp
        @group.timestamp = Time.now
        @group.save
      end
    end
  end
end

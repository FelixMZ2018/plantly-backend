class SensorsController < ApplicationController
  def list_adoptable
    @group = Group.where(user_id: @user.id).find(params[:id])
    @sensors = []
    @group.sensors.each do |s|
      @sensors << s if s.sensor_type == "soil_moisture" && s.plant.nil?
    end
    render json: @sensors
  end
end

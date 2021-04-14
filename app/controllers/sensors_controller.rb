class SensorsController < ApplicationController

    def listAdoptable
        @group = Group.where(user_id: @user.id).find(params[:id])
        @sensors = []
        @group.sensors.each do | s |
            if s.sensor_type === "soil_moisture" && s.plant.nil?
                @sensors << s
            end
        end
        render json: @sensors
      end

end

class SensorsController < ApplicationController

    def listAdoptable
        @group = Group.where(user_id: @user.id).find(params[:id])
        @sensors = []
        @group.each do | s | 
        end


    end

end

module Api
  module V1
    class PlantsController < ApplicationController
      skip_before_action :verify_authenticity_token

      def index
        @group = Group.all
        render json: @group, include: %i[plants sensors], root: "groups"
      end

      def new
        @plant = Plant.new
      end

      def create
        plant = Plant.create!((plant_params))
        if plant
          render json: plant
        else
          render json: plant.errors
        end
      end

      def show
        @plant_detail = Plant.find(params[:id])
        puts @plant_detail
        render json: @plant_detail, serializer: DetailedPlantsSerializer
      end

      def destroy
        @plant = Plant.find(params[:id]).destroy
        render json: { message: "Plant deleted" }, status: 200
      end

      private

      def plant_params
        params.require(:plant).permit(:name, :group_id)
      end
    end
  end
end

class PlantsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

  def record_not_found
    render json: { message: "Plant not found" }, status: 404
  end

  def index; end

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
    @plant_detail = Plant.where(user_id: @user.id).includes(:group, :sensors).find(params[:id])
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

  #  def plant_photo
  #    url_for(@plant.image)
  #  end
end

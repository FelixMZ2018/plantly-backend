class PlantController < ApplicationController
  def index
    plant = Plant.all.order(created_at: :desc)
    render json: plant
  end
end

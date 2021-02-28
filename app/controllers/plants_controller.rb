class PlantsController < ApplicationController
  def index
    @plant = Plant.all.order(created_at: :desc)
  end

  def fertilize_now; end

  def new
    @plant = Plant.new
  end

  def plant_photo
    url_for(@plant.image)
  end
end

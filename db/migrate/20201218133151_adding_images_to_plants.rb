class AddingImagesToPlants < ActiveRecord::Migration[6.0]
  def change
      add_column :plants, :image, :string
  end
end

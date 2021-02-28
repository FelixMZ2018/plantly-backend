class AddTypeReference < ActiveRecord::Migration[6.0]
  def change
    add_reference :plants, :species, foreign_key: true
  end
end

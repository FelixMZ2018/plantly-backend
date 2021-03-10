class AddingUsersToAllModels < ActiveRecord::Migration[6.1]
  def change
    add_reference :groups, :user, foreign_key: true,required: true
    add_reference :plants, :user, foreign_key: true
    add_reference :datapoints, :user, foreign_key: true
    add_reference :sensors, :user, foreign_key: true

  end
end

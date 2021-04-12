class AddWarningsBollean < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :warning_global, :boolean, :default => false
    add_column :sensors, :warning_sensor, :boolean, :default => false
  end
end

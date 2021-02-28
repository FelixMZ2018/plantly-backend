class AddFertilizerSchedulingSupport < ActiveRecord::Migration[6.0]
  def change
    add_column :plants, :fertilizerTimestamp, :date, :default => Date.today
    add_column :plants, :fertilizerInterval, :integer, :default => 14
  end
end

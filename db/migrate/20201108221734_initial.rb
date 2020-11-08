class Initial < ActiveRecord::Migration[6.0]
  def change
    create_table :groups do |t|
      t.string :name
      t.timestamps
    end
    create_table :plants do |t|
      t.string :name
      t.references :group, null: false, foreign_key: true
      t.timestamps
    end
    create_table :sensors do |t|
      t.string :Sensor_Type
      t.references :plant, null: true, foreign_key: true
      t.references :group, null: true, foreign_key: true
      t.integer :low_threshold
      t.integer :high_threshold
      t.string :hardware_id
      t.integer :low_value
      t.integer :high_value
      t.boolean :active
      t.timestamps
    end
    create_table :datapoints do |t|
      t.references :sensor, null: false, foreign_key: true
      t.integer :value
      t.time :sensor_time
      t.timestamps
    end
  end
end

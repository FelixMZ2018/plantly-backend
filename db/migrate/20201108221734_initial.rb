class Initial < ActiveRecord::Migration[6.0]
  def change
    create_table :groups do |t|
      t.string :name
      t.string :hardware_id
      t.integer :battery_level
      t.timestamps
    end
    create_table :plants do |t|
      t.string :name
   #   t.references :group, null: false, foreign_key: true
      #t.references :sensor, null: false, foreign_key: true
      t.timestamps
    end
    create_table :sensors do |t|
      t.string :sensor_type
     # t.references :group, null: true, foreign_key: true
     #t.references :plant, null: true, foreign_key: true
      t.string :signal_type
      t.integer :index

      t.integer :warning_low,:default => 30
      #Ex:- :default =>''
      t.integer :warning_high,:default => 80
      #Ex:- :default =>''
      t.string :hardware_id
      t.integer :calibration_low, :default => 1
      #Ex:- :default =>''
      t.integer :calibration_high, :default => 1024
      #Ex:- :default =>''
      t.timestamps
    end
    create_table :datapoints do |t|
     # t.references :sensor, null: false, foreign_key: true
      t.integer :value
      t.timestamps
    end
  end
end

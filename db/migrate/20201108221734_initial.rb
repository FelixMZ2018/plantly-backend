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
      t.integer :low_warning_threshold,:default => 30
      #Ex:- :default =>''
      t.integer :high_warning_threshold,:default => 80
      #Ex:- :default =>''
      t.string :hardware_id
      t.integer :low_normalizing_value, :default => 1
      #Ex:- :default =>''
      t.integer :high_normalizing_value, :default => 1024
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

# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_11_08_221734) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "datapoints", force: :cascade do |t|
    t.bigint "sensor_id", null: false
    t.integer "value"
    t.time "sensor_time"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["sensor_id"], name: "index_datapoints_on_sensor_id"
  end

  create_table "groups", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "plants", force: :cascade do |t|
    t.string "name"
    t.bigint "group_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["group_id"], name: "index_plants_on_group_id"
  end

  create_table "sensors", force: :cascade do |t|
    t.string "Sensor_Type"
    t.bigint "plant_id"
    t.bigint "group_id"
    t.integer "low_threshold"
    t.integer "high_threshold"
    t.string "hardware_id"
    t.integer "low_value"
    t.integer "high_value"
    t.boolean "active"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["group_id"], name: "index_sensors_on_group_id"
    t.index ["plant_id"], name: "index_sensors_on_plant_id"
  end

  add_foreign_key "datapoints", "sensors"
  add_foreign_key "plants", "groups"
  add_foreign_key "sensors", "groups"
  add_foreign_key "sensors", "plants"
end

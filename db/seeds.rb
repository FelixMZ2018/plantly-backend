# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Datapoint.destroy_all
Sensor.destroy_all
Plant.destroy_all
Group.destroy_all
gr = Group.create(name: 'Living Room')
pl = Plant.create(group_id: gr.id, name: 'Fancy Ficus')
Sensor.create(hardware_id: 'Living_Room_3', plant_id: pl.id)
puts 'Project Seeded'
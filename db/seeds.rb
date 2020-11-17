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
pl3 = Plant.create(group_id: gr.id, name: 'Fancy Ficus')
pl1 = Plant.create(group_id: gr.id, name: 'Amazing Aloe')
pl2 = Plant.create(group_id: gr.id, name: 'Magnificient Monstera')
Sensor.create(hardware_id: 'Living_Room_3', plant_id: pl3.id)
Sensor.create(hardware_id: 'Living_Room_1', plant_id: pl1.id)
Sensor.create(hardware_id: 'Living_Room_2', plant_id: pl2.id)

puts 'Project Seeded'
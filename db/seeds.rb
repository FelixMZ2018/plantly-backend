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
gr = Group.create(name: 'Living Room',hardware_id: 'Living_Room_')
pl1 = Plant.create(group_id: gr.id, name: 'Fancy Ficus')
pl1.image.attach(io: File.open('app/assets/images/seed_images/Ficus.jpeg'), filename: 'Ficus.jpeg')
pl2 = Plant.create(group_id: gr.id, name: 'Amazing Aloe')
pl2.image.attach(io: File.open('app/assets/images/seed_images/AloeVera.jpg'), filename: 'AloeVera.jpg')
pl3 = Plant.create(group_id: gr.id, name: 'Magnificient Monstera')
pl3.image.attach(io: File.open('app/assets/images/seed_images/Monstera.jpg'), filename: 'Ficus.jpg')
pl4 = Plant.create(group_id: gr.id, name: 'Dreamy Dracaena')
pl4.image.attach(io: File.open('app/assets/images/seed_images/Dracaena.jpg'), filename: 'Dracaena.jpg')
pl5 = Plant.create(group_id: gr.id, name: 'Precious Ponytail Palm')
pl5.image.attach(io: File.open('app/assets/images/seed_images/ponytail.jpg'), filename: 'Dracaena.jpg')


Sensor.create(hardware_id: 'Living_Room_0', plant_id: pl1.id, sensor_type: "Soil Moisture", low_normalizing_value: 800,high_normalizing_value: 400)
Sensor.create(hardware_id: 'Living_Room_1', plant_id: pl2.id, sensor_type: "Soil Moisture", low_normalizing_value: 800,high_normalizing_value: 400)
Sensor.create(hardware_id: 'Living_Room_2', plant_id: pl3.id, sensor_type: "Soil Moisture", low_normalizing_value: 800,high_normalizing_value: 400)
Sensor.create(hardware_id: 'Living_Room_3', plant_id: pl4.id, sensor_type: "Soil Moisture", low_normalizing_value: 800,high_normalizing_value: 400)
Sensor.create(hardware_id: 'Living_Room_4', plant_id: pl5.id, sensor_type: "Soil Moisture", low_normalizing_value: 800,high_normalizing_value: 400)

puts 'Project Seeded'
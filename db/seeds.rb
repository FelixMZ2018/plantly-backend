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
User.destroy_all
user1 = User.create(username: "sample", password: "sample")

gr = Group.create(name: 'Living Room',hardware_id: 'e61eb5b8-08da-4cbc-9892-faae2769f64d',user_id: user1.id)
pl1 = Plant.create(group_id: gr.id, name: 'Fancy Ficus',user_id: user1.id)
pl1.image.attach(io: File.open('app/assets/images/seed_images/Ficus.jpeg'), filename: 'Ficus.jpeg')
pl2 = Plant.create(group_id: gr.id, name: 'Amazing Aloe',user_id: user1.id)
pl2.image.attach(io: File.open('app/assets/images/seed_images/AloeVera.jpg'), filename: 'AloeVera.jpg')
pl3 = Plant.create(group_id: gr.id, name: 'Magnificient Monstera',user_id: user1.id)
pl3.image.attach(io: File.open('app/assets/images/seed_images/Monstera.jpg'), filename: 'Ficus.jpg')
pl4 = Plant.create(group_id: gr.id, name: 'Dreamy Dracaena',user_id: user1.id)
pl4.image.attach(io: File.open('app/assets/images/seed_images/Dracaena.jpg'), filename: 'Dracaena.jpg')
pl5 = Plant.create(group_id: gr.id, name: 'Precious Ponytail Palm',user_id: user1.id)
pl5.image.attach(io: File.open('app/assets/images/seed_images/ponytail.jpg'), filename: 'Dracaena.jpg')


sr1 = Sensor.create(
    signal_type: "analog",
    index: 1,
    hardware_id: 'e61eb5b8-08da-4cbc-9892-faae2769f64d',
    user: user1,
    group: gr,
    plant_id: pl1.id,
    sensor_type: "soil_moisture",
    calibration_low: 800,
    calibration_high: 400
    )
sr2 = Sensor.create(
    signal_type: "analog",
    index: 2,
    hardware_id: 'e61eb5b8-08da-4cbc-9892-faae2769f64d',
    user: user1,
    group: gr,
    plant_id: pl2.id,
    sensor_type: "soil_moisture",
    calibration_low: 800,
    calibration_high: 400
    )
sr3 = Sensor.create(
    signal_type: "analog",
    index: 3,
    hardware_id: 'e61eb5b8-08da-4cbc-9892-faae2769f64d',
    user: user1,
    group: gr,
    plant_id: pl3.id,
    sensor_type: "soil_moisture",
    calibration_low: 800,
    calibration_high: 400
    )
sr4 = Sensor.create(
    signal_type: "analog",
    index: 4,
    hardware_id: 'e61eb5b8-08da-4cbc-9892-faae2769f64d',
    user: user1,
    group: gr,
    plant_id: pl4.id,
    sensor_type: "soil_moisture",
    calibration_low: 800,
    calibration_high: 400
    ) 
sr5 = Sensor.create(
    signal_type: "digital",
    index: 1,
    hardware_id: 'e61eb5b8-08da-4cbc-9892-faae2769f64d',
    user: user1,
    group: gr,
    sensor_type: "light",
    )      
puts 'Project Seeded'
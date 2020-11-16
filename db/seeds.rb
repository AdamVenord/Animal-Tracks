100.times do
  Animal.create(
    name: Faker::Name.first_name,
    description: Faker::Lorem.sentence,
    type:  Faker::Creature::Animal.name
  )
end

puts '100 Animals insertimated'
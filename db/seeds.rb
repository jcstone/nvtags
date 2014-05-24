# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

#require '/db/seeds/mule_deer_hunt_1331'

require 'csv'

hunt_1331 = HuntStat.where(hunt_number: '1331').first    
if hunt_1331
  puts "Skipping seed of Mule Deer Hunt 1331"
else
  puts "Adding mule deer hunt 1331"
  csv_text = File.read('lib/data/mule_deer_hunt_1331.csv')
  csv = CSV.parse(csv_text, :headers => true)
  csv.each do |row|
    HuntStat.create!(row.to_hash)
  end
end

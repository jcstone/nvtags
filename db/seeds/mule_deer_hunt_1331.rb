require 'csv'

hunt_1331 = HuntStat.where(hunt_number = '1331').first    
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



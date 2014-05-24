class CreateHuntStats < ActiveRecord::Migration
  def change
    create_table :hunt_stats do |t|
      t.string :unit_group
      t.integer :apps
      t.integer :tag_sales
      t.integer :tags_sold
      t.integer :tags_avail
      t.string :draw_odds
      t.integer :percent_return
      t.integer :number_of_successful_hunters
      t.integer :percent_of_successful_hunters
      t.integer :point_class_1
      t.integer :point_class_2
      t.integer :point_class_3
      t.integer :point_class_4
      t.integer :point_class_5
      t.integer :point_class_6_plus
      t.integer :percent_4_plus_points
      t.integer :hunt_number
      t.integer :data_year

      t.timestamps
    end
  end
end

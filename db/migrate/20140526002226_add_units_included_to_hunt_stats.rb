class AddUnitsIncludedToHuntStats < ActiveRecord::Migration
  def change
    add_column :hunt_stats, :units_included, :string  
  end
end

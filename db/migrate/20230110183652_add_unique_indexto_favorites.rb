class AddUniqueIndextoFavorites < ActiveRecord::Migration[7.0]
  def change
    add_index :favorites, [:user_id, :listing_id], unique: true
  end
end

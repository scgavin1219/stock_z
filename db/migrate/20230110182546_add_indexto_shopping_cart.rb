class AddIndextoShoppingCart < ActiveRecord::Migration[7.0]
  def change
    add_index :carts, [:user_id, :listing_id], unique: true
  end
end

class CreateCart < ActiveRecord::Migration[7.0]
  def change
    create_table :carts do |t|
      t.references :user, foreign_key: true, null: false
      t.references :listing, foreign_key: true, null: false
      t.timestamps
    end
    add_index :favorites, [:user_id, :listing_id], unique: true
  end
end

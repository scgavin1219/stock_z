class CreateListings < ActiveRecord::Migration[7.0]
  def change
    create_table :listings do |t|
      t.string :name, null: false
      t.string :brand, null: false
      t.string :style, null: false
      t.string :colorway, null: false
      t.text :description, null: false
      t.float :old_price, null: false
      t.float :price, null: false
      t.string :category, null: false
      t.timestamps
    end
  end
end

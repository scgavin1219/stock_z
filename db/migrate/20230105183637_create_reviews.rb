class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.integer :rating, null: false
      t.text :text_rating
      t.references :user, foreign_key: true, null: false
      t.references :listing, foreign_key: true, null: false
      t.timestamps
    end
  end
end

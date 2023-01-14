class Review < ApplicationRecord
    validates :user_id, :listing_id, :rating, :text_rating, presence: true
    validates :rating, numericality: { only_integer: true, in: 0..5 }
    validates :text_rating, length: { in: 1..500 }

    belongs_to :user
    belongs_to :listing 



end
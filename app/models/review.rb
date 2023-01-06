class Review < ApplicationRecord
    # validates :user_id, :listing_id, :rating, :text_rating, presence: true

    belongs_to :user
    belongs_to :listing 



end
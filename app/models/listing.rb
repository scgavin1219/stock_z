class Listing < ApplicationRecord

has_many_attached :photos
has_many :reviews
has_many :carts
has_many :favorites

has_many :favoriters,
    through: :favorites,
    source: :user



end

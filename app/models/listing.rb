class Listing < ApplicationRecord

has_many_attached :photos
has_many :reviews
has_many :carts


end

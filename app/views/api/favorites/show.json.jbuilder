json.extract! @favorite, :id, :user_id, :listing_id
json.name @favorite.listing.name
json.price @favorite.listing.price
json.photoUrls @favorite.listing.photos.map { |photo| photo.url }
#photos go here
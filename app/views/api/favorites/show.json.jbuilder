json.extract! @favorite, :id, :user_id, :listing_id
json.name @favorite.listing.name
json.price @favorite.listing.price
#photos go here
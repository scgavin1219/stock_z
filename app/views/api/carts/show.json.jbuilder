json.extract! @cart_item, :user_id, :listing_id
    json.name @cart_item.listing.name
    json.price @cart_item.listing.price
    json.photoUrls @cart_item.listing.photos.map { |photo| photo.url }
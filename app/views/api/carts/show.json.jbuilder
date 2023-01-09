
    json.extract! @cart, :user_id, :listing_id, :id
    json.name @cart.listing.name
    json.price @cart.listing.price
    # json.photoUrls @cart_item.listing.photos.map { |photo| photo.url }
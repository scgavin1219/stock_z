@carts.each do |cart|
    json.set! cart.id do 
        json.extract! cart, :user_id, :listing_id
        json.name cart.listing.name
        json.price cart.listing.price
        json.photoUrls cart.listing.photos.map { |photo| photo.url }
    end
end
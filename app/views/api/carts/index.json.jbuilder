@carts.each do |cart_item|
    json.set! cart_item.id do 
        json.extract! cart_item, :user_id, :listing_id, :id, :quantity
        json.name cart_item.listing.name
        json.price cart_item.listing.price
        # json.photoUrls cart_item.listing.photos.map { |photo| photo.url }
    end
end
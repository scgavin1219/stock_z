 @listings.each do |listing|
    json.set! listing.id do
        json.extract! listing, :id, :name, :brand, :style, :colorway, :description, :old_price, :price, :category
        json.photoUrls listing.photos.map { |photo| photo.url }
        # json.photoUrl listing.photo.url
    end
end
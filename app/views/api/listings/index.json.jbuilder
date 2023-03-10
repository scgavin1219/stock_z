 @listings.each do |listing|
    json.set! listing.id do
        json.extract! listing, :id, :name, :brand, :style, :colorway, :description, :old_price, :price, :category
        # json.likes listing.favorites
   
    if current_user && listing.favoriters.include?(current_user)
        json.liked true
    else
        json.liked false
    end
        # json.liked listing.user_id == current_user.id
        json.photoUrls listing.photos.map { |photo| photo.url }
    end
end
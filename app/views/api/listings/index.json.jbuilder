json.listings do 
    @listings.each do |listing|
        json.set! listing.id do
            json.extract! listing, :name, :brand, :style, :colorway, :description,
                                  :old_price, :price, :category
        end
    end
end
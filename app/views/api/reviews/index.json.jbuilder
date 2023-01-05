 @reviews.each do |review|
    json.set! review.id do
        json.extract! review, :id, :rating, :text_rating, :user_id, :listing_id
    end
end
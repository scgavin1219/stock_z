 @reviews.each do |review|
    json.set! review.id do
        json.extract! review, :id, :rating, :text_rating, :user_id, :listing_id, :created_at, :updated_at
        json.username review.user.username
    end
end
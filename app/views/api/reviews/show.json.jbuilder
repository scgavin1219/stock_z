json.extract! @review, :id, :rating, :text_rating, :user_id, :listing_id
json.username @review.user.username
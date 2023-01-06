class Api::ReviewsController < ApplicationController
    before_action :require_logged_in, only: [:create, :update, :destroy ]
    
    def create
        @review = Review.new(review_params)
        # @review.user_id = current_user.id
        # @review.listing_id = params[:listing_id]
        if @review && @review.save
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def index
        incoming_listing_id = params[:listing_id]
        # @reviews(listing_id: incoming_listing_id)
        @reviews = Review.where(listing_id: incoming_listing_id)
        render :index
    end


    def update
        @review = Review.find_by(id: params[:id])
        if @review.update(review_params)
            render :index #not sure
        else
            render json: @review.errors.full_messages, status: 422
        end
    end 
    
    def destroy
        @review = Review.find_by(id: params[:id])
        if @review.destroy!
            # render :index
        else 
            render json:  @review.errors.full_messages, status: 422
        end
    end
   

    private

    def review_params
        params.require(:review).permit(:rating, :text_rating, :user_id, :listing_id, :created_at)
    end

end
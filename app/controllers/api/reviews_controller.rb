class Api::ReviewsController < ApplicationController
    before_action :require_logged_in, only: [:create, :update, :destroy ]
    
    def create
        @review = Review.new(review_params)
        # @review.user_id = current_user.id
        # @review.listing_id = params[:listing_id]
        if @review && @review.save
            render :index
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def index
        @reviews = Review.all
        render :index
    end

    # def edit 
    #     @review = Review.find_by(id: params[:id])
    #     render :edit
    # end

    def update
        @review = Review.find_by(id: params[:id])
        # if @review && current_user.id = @review.user_id
            if @review.update(review_params)
                render :index #not sure
            else
                render json: @review.errors.full_messages, status: 422
            end
        end
    end 
    
    def destroy
        @review = Review.find_by(id: params[:id])
        if @review.destroy!
            render :index
        else 
            render json: status: 422
    end
   

    private

    def review_params
        params.require(:review).permit(:rating, :text_rating, :user_id, :listing_id)
    end

end
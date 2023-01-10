class Api::FavoritesController < ApplicationController

    def create
        @favorite = Favorite.new(favorite_params)
        if @favorite && @favorite.save
            render :show
        else
            render json: @favorite.errors.full_messages, status: 422
        end
    end

    def index
        @favorites = Favorite.where(user_id: current_user.id)
        render :index
    end

    def show

    end

    def destroy
        @favorite = Favorite.find_by(id: params[:id])
        if @favorite.destroy!
        else
            render json: @favorite.errors.full_messages, status: 422
        end
    end


    private

    def favorite_params
        params.require(:favorite).permit(:user_id, :listing_id)
    end

end

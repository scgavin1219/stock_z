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
        # debugger
        # @favorite = Favorite.find_by(user_id: current_user.id, listing_id: params[:id])
        # @favorite = Favorite.find_by(id: params(:id))
        @favorite = current_user.favorites.find_by(id: params[:id])
        # debugger
        if @favorite.destroy!
            # render :index
        else
            render json: @favorite.errors.full_messages, status: 422
        end
    end


    private

    def favorite_params
        params.require(:favorite).permit(:user_id, :listing_id)
    end

end

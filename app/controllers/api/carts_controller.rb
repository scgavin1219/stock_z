class Api::CartsController < ApplicationController

    def create
        @cart_item = Cart.new(cart_params)
        if @cart_item && @cart_item.save
            render :show
        else
            render json: @cart_item.errors.full_messages, status: 422
        end
    end

    def index
        @cart_items = Cart.where(user_id: current_user.id)
        render :index
    end

    def show
       
    end

    def destroy 
        @cart_item = Cart.find_by(id: params[:id])
        if @cart_item.destroy!
            #render :index
        else
            render json: @cart_item.errors.full_messages, status: 422
        end
    end

    private

    def cart_params
        params.require(:cart_item).permit(:user_id, :listing_id)
    end

end
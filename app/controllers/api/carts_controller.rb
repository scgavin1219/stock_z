class Api::CartsController < ApplicationController

    def create
        @cart = Cart.new(cart_params)
        if @cart && @cart.save
            render :show
        else
            render json: @cart.errors.full_messages, status: 422
        end
    end

    def index
        @carts = Cart.where(user_id: current_user.id)
        render :index
    end

    def show
       
    end

    def destroy 
        @cart = Cart.find_by(id: params[:id])
        if @cart.destroy!
            #render :index
        else
            render json: @cart.errors.full_messages, status: 422
        end
    end

    private

    def cart_params
        params.require(:cart).permit(:user_id, :listing_id)
    end

end
class Api::CartsController < ApplicationController

    def create
        current_user.carts.each do |cart_item|
            # debugger
            if cart_item.listing_id == (params[:cart][:listing_id]).to_i
                
                cart_item.quantity += 1
                cart_item.save!
                @cart = cart_item
                render :show
                return
            end
            
        end

        @cart = Cart.new(cart_params)
        @cart.quantity = 1
    
        if @cart.save
            render :show
        else
            render json: ["invalid listing"], status: 422
        end

        # @cart = Cart.new(cart_params)
        # if @cart && @cart.save
        #     render :show
        # else
        #     render json: @cart.errors.full_messages, status: 422
        # end
    end

    def index
        @carts = Cart.where(user_id: current_user.id)
        render :index
    end

    def show
       
    end

    def destroy 
        # current_user.carts.each do |cart_item|
        #     if cart_item.listing_id == (params[:cart][:listing_id]).to_i && cart_item.quantity > 1
        #         cart_item.quantity -= 1
        #         cart_item.save!
        #         @cart = cart_item
        #         render :show
        #     else
                @cart = Cart.find_by(id: params[:id])
                if @cart.destroy!
                 #render :index
                else
                    render json: @cart.errors.full_messages, status: 422
                end
        #     end
        # end
    end

    private

    def cart_params
        params.require(:cart).permit(:user_id, :listing_id, :quantity)
    end

end


#OLD CREATE
  # @cart = Cart.new(cart_params)
        # if @cart && @cart.save
        #     render :show
        # else
        #     render json: @cart.errors.full_messages, status: 422
        # end


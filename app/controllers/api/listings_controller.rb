class Api::ListingsController < ApplicationController

    def index
        @listings = Listing.all
        render :index
    end

    def show
        @listing = Listing.find_by(id: params[:id])
        render :show
    end

    def search
        query = params[:query]
        @listings = Listing.where('name ILIKE ? OR description ILIKE ? OR category ILIKE ?', "%#{query}%", "%#{query}%", "%#{query}%")
        if @listings.length > 0
            render :index
        else
            render json: ["Sorry, we did not find any results for #{query}, try another search"], status: 404
        end
        
    end


end
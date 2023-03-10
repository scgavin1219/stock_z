Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  # post 'api/test', to: 'application#test'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resources :listings, only: [:show, :index] do 
      resources :reviews, only: [:index]
      collection do 
        get "/search/:query", to: "listings#search", :as => "search"
      end
    end
    resources :carts, only: [:create, :index, :destroy, :show, :update]
    resources :favorites, only: [:create, :index, :destroy, :show]
    resources :reviews, only: [:create, :update, :destroy]
    resource :session, only: [:show, :create, :destroy]
  end

  get '*path', to: "static_pages#frontend_index"
end
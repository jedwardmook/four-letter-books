Rails.application.routes.draw do
  resources :books, only: [:create, :index, :show, :update, :destroy]
  patch '/remove_image/:params1/image/:params2', to: 'books#remove_image'
  resources :users, only: [:create]
  resources :sessions, only: [:create]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
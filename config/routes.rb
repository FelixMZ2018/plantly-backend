Rails.application.routes.draw do
  default_url_options :host => "localhost:3000"
  namespace :api do
    namespace :v1 do
      get '/dashboard', to: 'groups#dashboard'
      get 'groups/index'
      post 'groups/create', to: 'groups#create'
      get 'groups/:id', to: 'groups#show'
      put 'groups/:id', to: 'groups#update'
      delete 'groups/:id', to: 'groups#destroy'
      post 'plants/create', to: 'plants#create'
      get '/plants/:id', to: 'plants#show'
      put '/plants/:id', to: 'plants#update'
      delete '/plants/delete/:id', to: 'plants#destroy'

    end
  end
  resources :users, only: [:create]
  post "/login", to: 'auth#login'
  get "/auto_login", to: 'auth#auto_login'
  get "/user_is_authed", to: 'auth#user_is_authed'
  
  root 'homepage#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

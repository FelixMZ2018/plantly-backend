Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'dashboard', to: 'groups#dashboard'
      get 'groups/index'
      post 'groups/create', to: 'groups#create'
      get 'groups/:id', to: 'groups#show'
      post 'groups/:id', to: 'groups#update'
      delete 'groups/:id', to: 'groups#destroy'
      post 'plants/create', to: 'plants#create'
      get '/plants/show/:id', to: 'plants#show'
      post '/plants/update/:id', to: 'plants#update'
      delete '/plants/delete/:id', to: 'plants#destroy'

    end
  end
  get 'home', to: 'pages#dashboard'
  # this line had to be deleted because it messed up all images
  #get '*path', to: 'pages#dashboard', via: :all
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
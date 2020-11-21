Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'plants/index'
      get 'plants/create'
      get 'plants/show', to 'plants#show'
      get 'plants/destroy', to 'plants#destroy'
    end
  end
  root to: 'pages#dashboard'
  get 'pages/dashboard'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

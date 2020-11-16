Rails.application.routes.draw do
  namespace :api do
    resources :animals
  end
end

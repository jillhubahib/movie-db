Rails.application.routes.draw do
  root 'movies#index'
  resource :movies, only: [:index]
end

Rails.application.routes.draw do
  root 'movies#index'
  
  get 'movies/index'
  get '/movies/:id', to: 'movies#show', as: 'movies'
end

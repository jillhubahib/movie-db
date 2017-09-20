Rails.application.routes.draw do
  resources :movies, only: %i(index) do
    member do
      get 'search'
    end
  end
  root 'movies#index'
end

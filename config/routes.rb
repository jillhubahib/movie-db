Rails.application.routes.draw do
  
  resources :movies, only: [:index, :show] do
    member do
      get 'search'
    end
  end

  root 'movies#index'

end

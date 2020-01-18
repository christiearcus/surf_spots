Rails.application.routes.draw do
  root to: 'search_results#index'
  get '/spot/:id', to: 'spot_details#index'

  get '/api/spots', to: 'api#results'
end

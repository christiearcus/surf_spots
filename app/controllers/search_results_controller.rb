class SearchResultsController < ApplicationController
  def index
    spots = Spot.all
    render json: { data: spots }
  end
end
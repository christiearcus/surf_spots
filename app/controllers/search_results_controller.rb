class SearchResultsController < ApplicationController
  def index
    @spots = Spot.all.to_json
  end
end
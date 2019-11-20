class SearchResultsController < ApplicationController
  def index
    @spots = Spot.all
  end
end
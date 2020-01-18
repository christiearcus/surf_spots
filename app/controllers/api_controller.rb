class ApiController < ApplicationController
  def results
    respond_to do |format|
      spots = Spot.all
      format.json  { render :json => spots }
    end
  end
end
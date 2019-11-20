require 'rails_helper'

RSpec.describe SearchResultsController do
  let(:spot) { Spot.create(name: "test", description: "test description") }

  describe "#index" do
    before do
      spot
    end
    
    it "renders a 200 response" do
      get :index
      expect(response).to render_component('SearchResults')
    end
  end
end

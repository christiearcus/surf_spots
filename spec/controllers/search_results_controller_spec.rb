require 'rails_helper'

RSpec.describe SearchResultsController do
  let(:spot) { Spot.create(name: "test", description: "test description") }

  describe "#index" do
    before do
      spot
    end
    
    it "renders a 200 response" do
      get :index
      expect(response).to be_successful
    end

    it "returns a set of surf spots" do
      get :index
      expect(response.body).to eq({ 
        data: [
          {
            id: spot.id,
            name: spot.name, 
            description: spot.description,
            created_at: spot.created_at,
            updated_at: spot.updated_at
          } 
        ]
      }.to_json)
    end
  end
end

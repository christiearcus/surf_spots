require 'rails_helper'

RSpec.describe Spot do
  it "is valid with valid attributes" do
    expect(Spot.new).to be_valid
  end
end
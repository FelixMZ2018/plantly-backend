require "rails_helper"

RSpec.describe "Api::V1::Plants", type: :request do
  describe "GET /index" do
    it "returns http success" do
      get "/api/v1/plants/index"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /create" do
    it "returns http success" do
      get "/api/v1/plants/create"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /show" do
    it "returns http success" do
      get "/api/v1/plants/show"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /destroy" do
    it "returns http success" do
      get "/api/v1/plants/destroy"
      expect(response).to have_http_status(:success)
    end
  end
end

require "rails_helper"

RSpec.describe "Api::V1::Groups", type: :request do
  describe "GET /index" do
    it "returns http success" do
      get "/api/v1/groups/index"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /create" do
    it "returns http success" do
      get "/api/v1/groups/create"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /show" do
    it "returns http success" do
      get "/api/v1/groups/show"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /destroy" do
    it "returns http success" do
      get "/api/v1/groups/destroy"
      expect(response).to have_http_status(:success)
    end
  end
end

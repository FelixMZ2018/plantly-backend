class HomepageController < ApplicationController
  skip_before_action :require_login, only: [:login,:index]

  def index
  end
  def login; end
end

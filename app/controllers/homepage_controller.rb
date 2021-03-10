class HomepageController < ApplicationController
  skip_before_action :require_login, only: %i[login index]

  def index; end

  def login; end
end

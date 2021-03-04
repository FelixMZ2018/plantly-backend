class AuthController < ApplicationController
  before_action :require_login

  def logged_in?
    !!session_user
  end

  def require_login
    render json: {message: "Please Login"}, status: :unauthorized unless logged_in?
  end 

  def login
    user = User.find_by(username: params[:username])
    if user&.authenticate(params[:password])
      payload = { user_id: user.id }
      token = encode_token(payload)
      render json: { user: user, jwt: token, success: "Welcome back, #{user.username}" }
    else
      render json: { failure: "Login failed, Please check credentials" }
    end
  end

  def auto_login
    if session_user
      render json: session_user
    else
      render json: { errors: "User not logged in" }
    end
  end
end

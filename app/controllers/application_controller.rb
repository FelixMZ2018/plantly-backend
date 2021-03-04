class ApplicationController < ActionController::Base
  def encode_token(payload)
    JWT.encode(payload, "secret_token")
  end

	def auth_header
		request.headers["Authorization"]
	end

  def session_user
    decoded_hash = decoded_token
    unless decoded_hash.empty?
      user_id = decoded_hash[0]["user_id"]
      @user = User.find_by(id: user_id)
    end
	end



    def decoded_token
      if auth_header
        token = auth_header.split(" ")[1]
        begin
          JWT.decode(token, "secret_token", true, algorith: "HS256")
        rescue JWT::DecodedError
          []
        end
      end
    end
  end

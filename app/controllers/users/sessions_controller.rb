# frozen_string_literal: true

class Users::SessionsController < Devise::SessionsController
  # before_action :configure_sign_in_params, only: [:create]

  # GET /resource/sign_in
  # def new
  #   super
  # end

  # POST /resource/sign_in
#   respond_to :json

#   def create
#     user = User
#     .find_by(email: params['user']['email'])
#     .try(:authenticate, params['user']['password'])
#     if user 
#       session[:user_id] = user.id
#       render json: {status: :created, user: user}
#     else 
#       render json: {status: 401}
#   end
# end


  # DELETE /resource/sign_out
  # def destroy
  #   super
  # end

  # protected

  # def after_sign_in_path_for(resource)
  #   categories_path
  # end
  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_in_params
  #   devise_parameter_sanitizer.permit(:sign_in, keys: [:attribute])
  # end
end

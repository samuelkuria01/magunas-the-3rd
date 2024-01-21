class ApplicationController < ActionController::Base
    helper_method :current_user, :logged_in?, :require_login
  
    def current_user
      User.find_by(id: session[:user_id])
    end
  
    def logged_in?
      !!current_user
    end
  
    def require_login
      return if logged_in?

      redirect_to login_path, alert: 'You must be logged in to access this page.'
    end
  
    protected
  
    # def after_sign_up_path_for(resource)
    #   categories_path
    # end
  end

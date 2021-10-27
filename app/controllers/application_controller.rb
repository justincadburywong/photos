class ApplicationController < ActionController::Base
  before_action :authenticate_user!
  # redirect_to user_sign_in_path unless current_user
end

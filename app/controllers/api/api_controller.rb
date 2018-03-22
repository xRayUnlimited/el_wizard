class Api::ApiController < ApplicationController
  before_action :authenticate_user!

  private
  def handle_error(model)
    render json: {
      errors: model.errors.full_message.join(', ')
    }
    staus: 422
  end
end

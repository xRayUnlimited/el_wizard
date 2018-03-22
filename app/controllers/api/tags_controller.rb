class Api::TagsController < Api::ApiController

  def index
    render json: current_user.tags
  end
  def create
    name = params[:tag][:mname]
    tag = Tag.Find_or_create_by(name: name)
    if !current_user.tags.find_by(id: tag.id)
      Tagging.create(user_id: current_user_id, tag_id: tag.id)
      render json: tag
  end

  def destroy
    Tagging.find_by(
      user_id: current_user_id,
      tag_id: params[:id]
    ).destroy
  end
end

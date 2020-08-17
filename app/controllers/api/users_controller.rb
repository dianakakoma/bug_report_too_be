class Api::UsersController < ApplicationController
  def create
    @user = User.new(
      name: params[:name],
      department: params[:department],
      email: params[:email],
    )
    if @user.save
      render "show.json.jb"
    else
      render json: { errors: user.errors.full_messages }, status: :bad_request
    end
  end

  def show
    @user = User.find_by(id: params[:id])
    render "show.json.jb"
  end

  def update
    @user = User.find_by(id: params[:id])
    @user.department = params[:department] || @user.department
    @user.save
    render "show.json.jb"
  end
end

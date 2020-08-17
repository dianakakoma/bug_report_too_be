class Api::ReportsController < ApplicationController
  def index
    @reports = Report.all
    render "index.json.jb"
  end

  def create
    @report = Report.new(
      report_type: params[:report_type],
      description: params[:description],
      suggested_fix: params[:suggested_fix],
      url: params[:url],
      screenshot: params[:screenshot],
      user_id: params[:user_id],
    )
    if @report.save
      render "show.json.jb"
    else
      render json: { errors: @report.errors.full_messages }, status: 422
    end

    def show
      @report = Report.find_by(id: params[:id])
      render "show.json.jb"
    end

    def update
      @report = Report.find_by(id: params[:id])
      @report.status = params[:status] || @report.status
      @report.suggested_fix = params[:suggested_fix] || @report.suggested_fix

      @report.save
      render "show.json.jb"
    end
  end
end

class NvtagsController < ApplicationController
  def index
    @hunt_1331 = HuntStat.all
    @hunt_numbers = HuntStat.pluck(:hunt_number).uniq
  end

  def ajax_hunt_data
    hunt_data = HuntStat.where(hunt_number: params[:hunt_number])
    #render :json => hunt_data
    respond_to do |format|
      format.json { render :json => hunt_data }
    end
  end
end

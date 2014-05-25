class NvtagsController < ApplicationController
  def index
    @hunt_1331 = HuntStat.all
  end
end

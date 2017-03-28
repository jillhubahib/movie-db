class MoviesController < ApplicationController
  def index
    movieDb = MovieDbService.new()
    @popular = movieDb.popular
  end
end

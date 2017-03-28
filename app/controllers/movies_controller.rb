class MoviesController < ApplicationController

  def index
    movieDb = MovieDbService.new
    @image_url = movieDb.configuration.base_url
    @popular = movieDb.popular
  end

  def show
    @movie = MoviePresenter.new(get_movie).details
    @image_url = "#{@movieDb.configuration.base_url}/w300_and_h450_bestv2#{@movie.poster_path}"
  end

  private

  def get_movie
    @movieDb = MovieDbService.new
    @movieDb.movie_detail(params['id'])
  end
end

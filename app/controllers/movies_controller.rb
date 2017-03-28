class MoviesController < ApplicationController
  protect_from_forgery

  def index
    get_movie_service
    @movies = @movieDb.popular
  end

  def show
    @movie = MoviePresenter.new(get_movie).details
    @image_url = "#{@movieDb.configuration.base_url}/w300_and_h450_bestv2#{@movie.poster_path}"
  end

  def search
    get_movie_service
    @movies = @movieDb.find(params[:q])
  end

  private

  def get_movie
    @movieDb = MovieDbService.new
    @movieDb.movie_detail(params['id'])
  end

  def get_movie_service
    @movieDb = MovieDbService.new
    @image_url = @movieDb.configuration.base_url
  end
end

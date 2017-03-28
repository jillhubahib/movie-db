class MoviesController < ApplicationController
  protect_from_forgery
  before_action :image_path, only: [:index, :search]

  def index
    @movies = movie_service.popular
  end

  def show
    @movie = MoviePresenter.new(movie_detail).details
    @image_url = "#{image_path}/w300_and_h450_bestv2#{@movie.poster_path}"
  end

  def search
    @movies = movie_service.find(params[:q])
    render template: 'movies/index'
  end

  private

  def movie_detail
    movie_service.movie_detail(params['id'])
  end

  def image_path
    @image_path ||= movie_service.configuration.base_url
  end

  def movie_service
    @movie_service ||= MovieDbService.new
  end
end

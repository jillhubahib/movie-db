class MovieDbService
  attr :configuration

  def initialize
    Tmdb::Api.key(ENV['TMDB_API_KEY'])
    @configuration = Tmdb::Configuration.new
  end

  def popular
    Tmdb::Movie.popular
  end

  def movie_detail(id)
    if id
      @movie = Tmdb::Movie.detail(id)
      cast_and_ratings
    end
  end

  private

  def cast_and_ratings
    @imdb_id = @movie['imdb_id'][2..-1] #remove prefix('tt') in imdb_id
    @movie.merge(
      'casts' => imdb.cast_members,
      'rating' => imdb.rating
    )
  end

  def imdb
    @imdb ||= Imdb::Movie.new(@imdb_id)
  end
end
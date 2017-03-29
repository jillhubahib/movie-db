class MovieDbService
  attr_reader :configuration

  def initialize
    @configuration = Tmdb::Configuration.new
    @tmdb = Tmdb::Movie
  end

  def popular
    @tmdb.popular
  end

  def movie_detail(id)
    return unless id
    @movie = @tmdb.detail(id)
    cast_and_ratings
  end

  def find(keyword)
    @tmdb.find(keyword) if keyword
  end

  private

  def cast_and_ratings
    @imdb_id = @movie['imdb_id'][2..-1] # need to remove prefix('tt') in imdb_id
    @movie.merge(
      'casts' => imdb.cast_members,
      'rating' => imdb.rating
    )
  end

  def imdb
    @imdb ||= Imdb::Movie.new(@imdb_id)
  end
end
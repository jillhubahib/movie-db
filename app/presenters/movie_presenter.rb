class MoviePresenter
  def initialize(movie)
    @movie = movie
  end

  def details
    OpenStruct.new(
      title: @movie['original_title'],
      year: Date.parse(@movie['release_date']).year,
      poster_path: @movie['poster_path'],
      genres: @movie['genres'].map { |genre| genre['name'] }.join(' / '),
      synopsis: @movie['overview'],
      rating: @movie['rating'],
      casts: @movie['casts']
    )
  end
end
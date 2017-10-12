class MoviePresenter
  def initialize(movie)
    @movie = movie
  end

  def data
    OpenStruct.new(
      title: @movie['original_title'],
      poster_path: @movie['poster_path'],
      genres: @movie['genres'].map { |genre| genre['name'] }.join(' / '),
      synopsis: @movie['overview'],
      rating: @movie['rating'],
      casts: @movie['casts'],
      tagline: @movie['tagline'],
      runtime: @movie['runtime'],
      release_date: @movie['release_date'],
      revenue: @movie['revenue']
    )
  end
end
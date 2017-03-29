[Programming assignment](https://gist.github.com/hopsoft/54141400166915f3aa06b10e5ed09714) for Skipio

Rails app to show off cinematic movie information.

Used TheMovieDB API and IMDB.

### Prerequisite

This project requires an API key from [The Movie Database](https://www.google.com.ph/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwiCtZOXnfrSAhXDNpQKHZShCg0QFggaMAA&url=https%3A%2F%2Fwww.themoviedb.org%2Fen&usg=AFQjCNFc2kOBuTnm_SAprWVGDgKKH4nJsA). Get your API key [here](https://www.themoviedb.org/account).

Create a `.env` file in the project's root directory and specify your key as below
```
TMDB_API_KEY=XXXXXXXXXXXXXXXXXXXX
```

### Installation

Install dependecies by running below commands
```
bundle install
rails webpacker:install
```

### Run
You may run server either by `rails c` or the provided binstub `./bin/serve` command.

### Deployment
Project is deployed in [Heroku](https://jill-moviedb.herokuapp.com)

### Built With
- Ruby on Rails - The Ruby web framework
- Twitter Bootstrap
- React (TODO)

### TODO

- [x] Show vote average in the card
- [x] Create and endpoint for a movie to show its full detail
- [x] Add search functionality
- [ ] Convert to React
- [x] Add test (only few added)
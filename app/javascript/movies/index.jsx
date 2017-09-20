import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import configureStore from './state/store'

document.addEventListener('DOMContentLoaded', () => {
  const movieNode = document.getElementById('movies_data')
  const movieData = JSON.parse(movieNode.getAttribute('data'))

  const imagePathNode = document.getElementById('image_path')
  const imagePath = JSON.parse(imagePathNode.getAttribute('data'))

  const store = configureStore({movies: movieData, imagePath: imagePath})
  console.log(store.getState())

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('react-movies'),
  )
})

import React from 'react'
import HeaderSection from './HeaderSection'
import MovieList from './MovieList'

export default (props) => (
  <div>
    <HeaderSection />
    <MovieList {...props} />
  </div>
)
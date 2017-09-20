import React from 'react'
import SearchForm from './SearchForm'

export const WelcomeMessage = () => (
  <div className="container">
    <h1 className="jumbotron-heading">Welcome to MovieDB</h1>
  </div>
)

export default () => (
  <section className="jumbotron text-center">
    <WelcomeMessage />
    <SearchForm />
  </section>
)
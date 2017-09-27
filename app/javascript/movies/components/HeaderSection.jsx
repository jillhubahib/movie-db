import React from 'react'
import SearchForm from './SearchForm'
import LoadingSpinner from './LoadingSpinner'

export const WelcomeMessage = () => (
  <div className="container">
    <h1 className="jumbotron-heading">Welcome to MovieDB</h1>
  </div>
)

const HeaderSection = () => (
  <section className="jumbotron text-center">
    <WelcomeMessage />
    <SearchForm />
    <LoadingSpinner />
  </section>
)

export default HeaderSection
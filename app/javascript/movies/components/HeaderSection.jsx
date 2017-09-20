import React from 'react'
import SearchForm from './SearchForm'
import MessageStatus from './MessageStatus'

export const WelcomeMessage = () => (
  <div className="container">
    <h1 className="jumbotron-heading">Welcome to MovieDB</h1>
  </div>
)

const HeaderSection = () => (
  <section className="jumbotron text-center">
    <WelcomeMessage />
    <SearchForm />
    <MessageStatus />
  </section>
)

export default HeaderSection
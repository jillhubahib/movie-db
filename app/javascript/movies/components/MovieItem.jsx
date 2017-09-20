import React from 'react'

export const MovieImage = ({ name, src }) => (
  <img alt={name} src={src} />
)

export const VoteBadge = ({ vote_average }) => (
  <h6>
    Vote Average <span className="badge badge-default">{vote_average}</span>
  </h6>
)

const imageSize = 'w300_and_h450_bestv2'

const MovieItem = ({ title, imagePath, poster_path, vote_average }) => {
  const src = poster_path
              ? `${imagePath}${imageSize}${poster_path}`
              : undefined
  return (
    <div className="card">
      <a>
        <MovieImage name={title}
          src={src}
        />
      </a>
      <p className="card-text"></p>
      <VoteBadge vote_average={vote_average} />
    </div>
  )
}

export default MovieItem
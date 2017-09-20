import React from 'react'

export const MovieImage = ({ name, imagePath }) => (
  <img alt={name} src={imagePath} />
)

export const VoteBadge = ({ vote_average }) => (
  <h6>
    Vote Average
    <span className="badge badge-default">{vote_average}</span>
  </h6>
)

const imageSize = 'w300_and_h450_bestv2'

export default ({ title, imagePath, poster_path, vote_average }) => (
  <div className="card">
    <a>
      <MovieImage name={title}
        imagePath={`${imagePath}${imageSize}${poster_path}`}
      />
    </a>
    <p className="card-text"></p>
    <VoteBadge vote_average={vote_average} />
  </div>
)
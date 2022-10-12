


import React from 'react'
import { CardMovie } from './CardMovie'

export const MovieList = ({tabMovie}) => {
  return (
    <div>
       <div className="totalCard">{React.Children.toArray(tabMovie.map(movies=><CardMovie  film={movies}  />))}</div>
    </div>
  )
}

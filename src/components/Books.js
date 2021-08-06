import React from 'react'
import {useQuery, gql} from '@apollo/client'
import { getTypenameFromResult } from '@apollo/client/utilities'
import { ALL_BOOKS } from '../../queries'



const Books = (props) => {
  const result = useQuery(ALL_BOOKS)

  if (!props.show) {
    return null
  }

  if(result.loading) return (
    <div>Loading...</div>
  )

  
  return (
    <div>
      <h2>books</h2>

      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>
              Author
            </th>
            <th>
              Published
            </th>
          </tr>
          {result.data.allBooks.map(a =>
            <tr key={a.title}>
              <td>{a.title}</td>
              <td>{a.author}</td>
              <td>{a.published}</td>
            </tr>
          )}
        </tbody>
      </table>
      {
        props.genres.map( (genre, genreIndex) => (
          <span key={`app-genre-list-no${genreIndex}`}>
            {genre}
          </span>
        ))
      }

    </div>
  )
}

export default Books
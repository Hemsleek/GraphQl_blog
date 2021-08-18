import React,{ useState } from 'react'
import { useQuery } from '@apollo/client'
import { ALL_BOOKS } from '../queries'



const Books = (props) => {
  const [selectedGenre, setSelectedGenre] = useState('all genres')
  const result = useQuery(ALL_BOOKS)

  const bookFilter = () => selectedGenre==='all genres'
    ? result.data.allBooks
    : result.data.allBooks.filter(book => book.genres.includes(selectedGenre))


  if (!props.show) {
    return null
  }

  if (result.loading) return (
    <div>Loading...</div>
  )


  return (
    <div>
      <h2>books</h2>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>
              Author
            </th>
            <th>
              Published
            </th>
          </tr>
        </thead>
        <tbody>
          {bookFilter.map(a =>
            <tr key={a.title}>
              <td>{a.title}</td>
              <td>{a.author}</td>
              <td>{a.published}</td>
            </tr>
          )}
        </tbody>
      </table>
      {
        props.genres.map((genre, genreIndex) => (
          <span style={{borderRadius:'10px', padding:"1rem"}} onClick={() =>  setSelectedGenre()} key={`app-genre-list-no${genreIndex}`}>
            {genre}
          </span>
        ))
      }

    </div>
  )
}

export default Books
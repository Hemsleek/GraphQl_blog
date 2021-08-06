import React, { useState } from 'react'
import { useMutation,gql } from '@apollo/client'
import {ALL_BOOKS} from './Books'
import { ADD_BOOK } from '../../queries'

const NewBook = ({show, setError,errorM,genres,setGenres}) => {

  const [addBook] = useMutation(ADD_BOOK,{
    refetchQueries:[{query:ALL_BOOKS}],
    onError:(error) => {
      setError(error.networkError.message)
    }
  })
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [published, setPublished] = useState('')
  const [genre, setGenre] = useState('')

  if (!show) {
    return null
  }

  const submit = async (event) => {
    event.preventDefault()
    
    addBook({variables:{title:title? title : null, author, published:parseInt(published,10),genres:[genre]}})

    setTitle('')
    setPublished('')
    setAuthor('')
    setGenre('')
  }

  const addGenre = () => {
    setGenres(genres.concat(genre))
  }

  return (
    <div>
      <form onSubmit={submit}>
        <div>
          title
          <input
            value={title}
            onChange={({ target }) => setTitle(target.value)}
          />
        </div>
        <div>
          author
          <input
            value={author}
            onChange={({ target }) => setAuthor(target.value)}
          />
        </div>
        <div>
          published
          <input
            type='number'
            value={published}
            onChange={({ target }) => setPublished(target.value)}
          />
        </div>
        <div>
          <input
            value={genre}
            onChange={({ target }) => setGenre(target.value)}
          />
          <button onClick={addGenre} type="button">add genre</button>
        </div>
        <div>
          genres: {genres.join(' ')}
        </div>
        <button type='submit'>create book</button>
      </form>
    </div>
  )
}

export default NewBook

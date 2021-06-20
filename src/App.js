import React, { useState } from 'react'
import Authors from './components/Authors'
import Books from './components/Books'
import NewBook from './components/NewBook'
import Notify from './components/Notify'

const App = () => {
  const [page, setPage] = useState('authors')
  const [error , setError]= useState(null)

  const handleError = (message) => {
    setError(message)
    setTimeout((
        setError(null)
    )
    ,5000)
  }

  return (
    <div>
      <Notify message={error} />
      <div>
        <button onClick={() => setPage('authors')}>Authors</button>
        <button onClick={() => setPage('books')}>Books</button>
        <button onClick={() => setPage('add')}>Add Book</button>
      </div>

      <Authors
        show={page === 'authors'}
      />

      <Books
        show={page === 'books'}
      />

      <NewBook
        show={page === 'add'}
        setError = {handleError}
        errorM = {error}
      />

    </div>
  )
}

export default App
import React, { useState } from 'react'
import Authors from './components/Authors'
import Books from './components/Books'
import NewBook from './components/NewBook'
import Notify from './components/Notify'

const App = () => {
  const [token , setToken] = useState(null)
  const [page, setPage] = useState('authors')
  const [error , setError]= useState(null)

  const handleError = (message) => {
    setError(message)
    setTimeout(() => {
        setError(null)
    }
    ,5000)
  }
  const handleLogin = (e) => {
    e.preventDefault()
    const username = e.target.username
    const password = e.target.password
    

  }

  if(!token) {
    return (
      <div>
          <Notify message={error} />
          <form onSubmit ={handleLogin}> 
            <input type="text" name="username" />
            <inpt  type="text"  name="password" />
            <button>LOGIN</button>
          </form>
      </div>
    )
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
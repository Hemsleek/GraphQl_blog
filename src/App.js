import React, { useState, useEffect } from 'react'
import Authors from './components/Authors'
import Books from './components/Books'
import NewBook from './components/NewBook'
import Notify from './components/Notify'
import LoginForm from './components/LoginForm'
import { gql, useMutation } from '@apollo/client'

export const LOGIN = gql`
  mutation login($username:String!, $password:String!){
    login(username:$username,password:$password){
        value
    }
  }
`

const App = () => {
  const [token, setToken] = useState(null)
  const [page, setPage] = useState('authors')
  const [error, setError] = useState(null)

  const [login, result] = useMutation(LOGIN, {
    onError: (error) => {
      setError(error.graphQLErrors[0].message)
    }
  })

  useEffect(() => {
    if (result.data) {
      const freshToken = result.data.login.value
      setToken(freshToken)
      localStorage.setItem('user-token', freshToken)
    }
  }, [result.data])

  const handleError = (message) => {
    setError(message)
    setTimeout(() => {
      setError(null)
    }
      , 5000)
  }
  const handleLogin = (e) => {
    e.preventDefault()
    const username = e.target.username
    const password = e.target.password
    login({ variables: { username, password } })

  }



  return (
    <div>
      <Notify message={error} />
      <div>
        <button onClick={() => setPage('authors')}>Authors</button>
        <button onClick={() => setPage('books')}>Books</button>
        {
          token ?
            <button onClick={() => setPage('login')}>Login</button>
            :
          <>
          <button onClick={() => setPage('add')}>Add Book</button>
          <button onClick={() => {localStorage.removeItem('user-token');setToken(null)}}>Logout</button>
          </>
        }
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
      <LoginForm show={page==="login"} handleLogin={handleLogin} />

    </div>
      )
}

      export default App